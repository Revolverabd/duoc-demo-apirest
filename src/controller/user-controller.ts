import { Request, Response, NextFunction } from 'express'
import userServices from '../services/UserServices'
import HTTP_STATUS from '../shared/constants/status-codes'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(HTTP_STATUS.CREATED.CODE).json({ esp: await userServices.create(req.body) })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(HTTP_STATUS.OK.CODE).json({ esp: await userServices.getUsers() })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { body } = req
    res.status(HTTP_STATUS.OK.CODE).json({ esp: await userServices.updateUser(id, body) })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    res.status(HTTP_STATUS.OK.CODE).json({ esp: await userServices.deleteUser(id) })
  } catch (error) {
    console.log(error)
    next(error)
  }
}

export {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
}


