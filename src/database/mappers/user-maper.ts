import User from '../models/user'

const createUserModel = (userData: any) => {
  return new User({
    dni: userData.dni,
    firstName: userData.firstName,
    lastName: userData.lastName
  })
}

export default {
  createUserModel
}