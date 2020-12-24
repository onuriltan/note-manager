import * as mail from '../../../../config/mail'
import { AppUser } from '../../entity/user.entity'
import * as authRepository from '../../repository/auth'
import bcrypt from 'bcrypt'

export const sendConfirmationMail = async (user: AppUser): Promise<boolean> => {
  if (user?.local?.email && user.confirmationToken) {
    try {
      await mail.sendConfirmationMail(user.local.email, user.confirmationToken)
      return true
    } catch (e) {
      return false
    }
  }
  return false
}

export const resendConfirmationMail = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const foundUser = await authRepository.findUser(email)
    if (foundUser && !foundUser.active && foundUser.password) {
      const isPasswordCorrect = bcrypt.compareSync(password, foundUser.password)
      if (isPasswordCorrect) {
        const user = await authRepository.regenerateUserConfirmationToken(email)
        if (user) {
          return await sendConfirmationMail(user)
        } else {
          return false
        }
      } else {
        return false
      }
    } else {
      return false
    }
  } catch (e) {
    return false
  }
}
