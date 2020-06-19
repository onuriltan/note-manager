const noteController = require('./note.controller')
const noteRepository = require('../repository/note.repository')
const noteService = require('../service/note.service')

jest.mock('../service/note.service')
jest.mock('../repository/note.repository')

describe(`${noteController.findNotes.name} Controller`, () => {
  const resSend = jest.fn()
  const resStatus = jest.fn()
  const resSet = jest.fn()
  const mockResponse = {
    set: resSet,
    status: resStatus,
    send: resSend,
  }
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it(`should return the return value of noteRepository.findNotes`, async () => {
    // Arrange
    const mockRequest = {
      query: {
        email: 'onur@iltan.com',
        limit: 1,
        page: 1,
      },
    }
    const findNotes = jest.spyOn(noteService, 'findNotes').mockReturnValue([])

    // Act
    await noteController.findNotes(mockRequest, mockResponse)

    // Assert
    expect(findNotes).toHaveBeenCalledWith(mockRequest.query.email, {
      limit: mockRequest.query.limit,
      page: mockRequest.query.page,
    })
    expect(mockResponse.send).toHaveBeenCalledWith([])
  })
})

describe(`${noteController.findNotesBetweenDatesandKeyword.name} Controller`, () => {
  const resSend = jest.fn()
  const resStatus = jest.fn()
  const resSet = jest.fn()
  const mockResponse = {
    set: resSet,
    status: resStatus,
    send: resSend,
  }
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it(`should return the return value of noteRepository.findNotes`, async () => {
    // Arrange
    const mockRequest = {
      query: {
        email: 'onur@iltan.com',
        limit: 1,
        page: 1,
      },
      params: {
        fromDate: 'fromDate',
        toDate: 'toDate',
        keyword: 'keyword',
      },
    }
    const findNotes = jest
      .spyOn(noteRepository, 'findNotesBetweenDatesandKeyword')
      .mockReturnValue([])

    // Act
    await noteController.findNotesBetweenDatesandKeyword(
      mockRequest,
      mockResponse
    )

    // Assert
    expect(findNotes).toHaveBeenCalledWith(
      mockRequest.params.fromDate,
      mockRequest.params.toDate,
      mockRequest.params.keyword,
      mockRequest.query.email,
      { page: mockRequest.query.page, limit: mockRequest.query.limit }
    )
    expect(mockResponse.send).toHaveBeenCalledWith([])
  })
})

describe(`${noteController.createNote.name} Controller`, () => {
  const resSend = jest.fn()
  const resStatus = jest.fn()
  const resSet = jest.fn()
  const mockResponse = {
    set: resSet,
    status: resStatus,
    send: resSend,
  }
  beforeAll(() => {
    resSend.mockImplementation(() => mockResponse)
    resStatus.mockImplementation(() => mockResponse)
    resSet.mockImplementation(() => mockResponse)
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it(`should return the return value of noteRepository.createNote`, async () => {
    // Arrange
    const mockRequest = {
      query: {
        email: 'onur@iltan.com',
      },
      body: {
        text: 'text',
      },
    }
    const createNote = jest
      .spyOn(noteRepository, 'createNote')
      .mockReturnValue([])

    // Act
    await noteController.createNote(mockRequest, mockResponse)

    // Assert
    expect(createNote).toHaveBeenCalledWith('text', mockRequest.query.email)
    expect(mockResponse.status).toHaveBeenCalledWith(201)
    expect(mockResponse.send).toHaveBeenCalledWith([])
  })
})

describe(`${noteController.editNote.name} Controller`, () => {
  const resSend = jest.fn()
  const resStatus = jest.fn()
  const resSet = jest.fn()
  const mockResponse = {
    set: resSet,
    status: resStatus,
    send: resSend,
  }
  beforeAll(() => {
    resSend.mockImplementation(() => mockResponse)
    resStatus.mockImplementation(() => mockResponse)
    resSet.mockImplementation(() => mockResponse)
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it(`should return the return value of noteRepository.editNote`, async () => {
    // Arrange
    const mockRequest = {
      query: {
        email: 'onur@iltan.com',
      },
      body: {
        text: 'text',
      },
      params: {
        id: '123',
      },
    }
    const editNote = jest.spyOn(noteRepository, 'editNote').mockReturnValue({})

    // Act
    await noteController.editNote(mockRequest, mockResponse)

    // Assert
    expect(editNote).toHaveBeenCalledWith(
      mockRequest.params.id,
      mockRequest.query.email,
      mockRequest.body.text
    )
    expect(mockResponse.send).toHaveBeenCalledWith({})
  })
})

describe(`${noteController.deleteNote.name} Controller`, () => {
  const resSend = jest.fn()
  const resStatus = jest.fn()
  const resSet = jest.fn()
  const mockResponse = {
    set: resSet,
    status: resStatus,
    send: resSend,
  }
  beforeEach(() => {
    jest.clearAllMocks()
  })
  const mockRequest = {
    query: {
      email: 'onur@iltan.com',
    },
    params: {
      id: '123',
    },
  }
  beforeAll(() => {
    resSend.mockImplementation(() => mockResponse)
    resStatus.mockImplementation(() => mockResponse)
    resSet.mockImplementation(() => mockResponse)
  })

  it(`should return response with 201`, async () => {
    // Arrange
    const deleteNote = jest
      .spyOn(noteRepository, 'deleteNote')
      .mockResolvedValue('deletedNote')

    // Act
    await noteController.deleteNote(mockRequest, mockResponse)

    // Assert
    expect(deleteNote).toHaveBeenCalledWith(
      mockRequest.query.email,
      mockRequest.params.id
    )
    expect(mockResponse.status).toHaveBeenCalledWith(201)
    expect(mockResponse.send).toHaveBeenCalledWith()
  })

  it(`should return response with 400`, async () => {
    // Arrange
    const deleteNote = jest
      .spyOn(noteRepository, 'deleteNote')
      .mockResolvedValue('')

    // Act
    await noteController.deleteNote(mockRequest, mockResponse)

    // Assert
    expect(deleteNote).toHaveBeenCalledWith(
      mockRequest.query.email,
      mockRequest.params.id
    )
    expect(mockResponse.status).toHaveBeenCalledWith(400)
    expect(mockResponse.send).toHaveBeenCalledWith()
  })
})
