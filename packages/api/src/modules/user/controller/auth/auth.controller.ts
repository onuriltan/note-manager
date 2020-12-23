import bcrypt from 'bcrypt'
import * as authRepository from '../../repository/auth'
import * as authService from '../../service/auth/auth.service'
import * as jwt from '../../../../middlewares/jwt'
import { logger } from '../../../../config/pino'
import { Request, Response } from 'express'

interface ReturnType {
  msg: string
}

export const loginWithSocial = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  if (req?.appUser?.method) {
    const token = await jwt.signToken(req.appUser)
    if (token) {
      return res.redirect(
        `${process.env.CLIENT_URL}/login/?${
          req.appUser.method
        }Token=${encodeURIComponent(token)}`
      )
    } else {
      return res.status(401)
    }
  } else {
    return res.status(401)
  }
}

export const loginWithEmail = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body
  const errors: ReturnType[] = []
  const user = await authRepository.findUser(email)
  if (user?.local?.password) {
    const isPasswordCorrect = bcrypt.compareSync(password, user.local.password)
    if (!user.active) {
      errors.push({ msg: 'You need to activate your account' })
      return res.status(401).json({ errors })
    } else if (user.active && isPasswordCorrect) {
      const token = await jwt.signToken(user)
      return res.json({ token, method: user.method })
    } else {
      errors.push({ msg: 'Username or password is wrong' })
      return res.status(401).json({ errors })
    }
  } else {
    errors.push({ msg: 'Username or password is wrong' })
    return res.status(401).json({ errors })
  }
}

export const registerWithEmail = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body
  const errors: ReturnType[] = []
  const messages: ReturnType[] = []
  const foundUser = await authRepository.findUser(email)
  if (foundUser) {
    errors.push({ msg: 'This email is already registered' })
    return res.status(400).json({ errors })
  } else {
    try {
      const newUser = await authRepository.createUser(email, password)
      if (newUser && newUser.id) {
        const isConfirmationEmailSent = await authService.sendConfirmationMail(
          newUser
        )
        if (isConfirmationEmailSent) {
          messages.push({ msg: 'Check your email to confirm your account!' })
          return res.status(200).json({ messages })
        } else {
          errors.push({
            msg: 'An error occurred while sending confirmation email',
          })
          await authRepository.deleteUser(newUser.id)
          return res.status(400).json({ errors })
        }
      } else {
        errors.push({ msg: 'An error occurred' })
        return res.status(400).json({ messages })
      }
    } catch (e) {
      errors.push({ msg: 'An error occurred, please try again' })
      return res.status(400).json({ errors })
    }
  }
}

export const resendConfirmationEmail = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body
  const errors: ReturnType[] = []
  const messages: ReturnType[] = []
  const foundUser = await authRepository.findUser(email)
  if (foundUser && !foundUser.active && foundUser.password) {
    const isPasswordCorrect = bcrypt.compareSync(password, foundUser.password)
    if (isPasswordCorrect) {
      const user = await authRepository.regenerateUserConfirmationToken(email)
      if (user) {
        try {
          await authService.sendConfirmationMail(user)
          messages.push({ msg: 'Confirmation email is resent!' })
          return res.status(200).json({ messages })
        } catch (e) {
          errors.push({ msg: 'An error occurred, please try again' })
          return res.status(400).json({ errors })
        }
      }
    } else {
      errors.push({ msg: 'Username or password is wrong' })
      return res.status(400).json({ errors })
    }
  }
  errors.push({ msg: 'An error occurred' })
  return res.status(400).json({ errors })
}

export const findUserWithConfirmationToken = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const errors: ReturnType[] = []
  const confirmationToken = req.params.confirmationToken
  const user = await authRepository.findUserWithConfirmationToken(
    confirmationToken
  )
  if (user) {
    const expiry = user.confirmationTokenExpiry?.getDate()
    const compare = new Date().setDate(new Date().getDate() + 3)
    if (expiry && expiry < compare) {
      user.confirmationToken = undefined
      user.confirmationTokenExpiry = undefined
      user.active = true
      try {
        const updatedUser = await user.save()
        logger.info(
          `User is activated by confirmation token: ${updatedUser?.local?.email}`
        )
      } catch (e) {
        logger.error(e)
      }
      const token = await jwt.signToken(user)
      res.json({ token })
    } else {
      await authRepository.deleteUser(user._id.toString())
      errors.push({ msg: 'Your account is expired, please re-register again' })
      return res.status(401).json({ errors })
    }
  }
  errors.push({ msg: 'No new user found with that token' })
  return res.status(404).json({ errors })
}
