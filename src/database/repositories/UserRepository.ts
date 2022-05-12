import mongoose from 'mongoose'
import { USER_COLLECTION } from '../../shared/constants/collectionNames'

const create = async (user: any) => {
  const session = await mongoose.startSession()
  session.startTransaction()
  try {
    await user.save()
    await session.commitTransaction()
    session.endSession()
    return user
  } catch (error) {
    session.abortTransaction()
    session.endSession()
    console.log(error)
    throw new Error('error at create users')
  }
}

const findAll = async () => {
  const criteria = {}
  return await mongoose.model(USER_COLLECTION).find(criteria)
}

const updateById = async (id: any, body: any) => {
  const criteria = { _id: id }
  return await mongoose.model(USER_COLLECTION).findOne(criteria).updateOne(body) 
}

const deleteById = async (id: any) => {
  const criteria = { _id: id }
  return await mongoose.model(USER_COLLECTION).deleteOne(criteria)
}

// const findByDni = async (dni) => {
//   const criteria = { dni: { $eq: dni } }
//   return mongoose.model(USER_COLLECTION).find(criteria)
// }

export default {
  create,
  findAll,
  updateById,
  deleteById
}
