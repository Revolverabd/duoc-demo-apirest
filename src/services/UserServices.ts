import mapper from '../database/mappers/user-maper'
import userRepository from '../database/repositories/UserRepository'

const create = async (userRequest: any) => {
  try {
    const user = mapper.createUserModel(userRequest)
    const newUser = await userRepository.create(user)
    return newUser
  } catch (error) {
    console.log(error)
    throw new Error('error at create users')
  }
}

const getUsers = async () => {
  try {
    const users = await userRepository.findAll()
    return users
  } catch (error) {
    console.log(error)
    throw new Error('error at list of users')
  }
}

const updateUser = async (id: any, body: any) => {
  try {
    const users = await userRepository.updateById(id, body)
    return users
  } catch (error) {
    console.log(error)
    throw new Error('error at list of users')
  }
}

const deleteUser = async (id: any) => {
  try {
    const users = await userRepository.deleteById(id)
    return users
  } catch (error) {
    console.log(error)
    throw new Error('error at list of users')
  }
}

export default {
  create,
  getUsers,
  updateUser,
  deleteUser
}