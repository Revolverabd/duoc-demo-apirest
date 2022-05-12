import { Router } from 'express'
import { createUser, deleteUser, getAllUsers, updateUser } from '../controller/user-controller'

const router = Router()

router.get('/users', getAllUsers)
router.post('/create-user', createUser)
router.put('/update-user/:id', updateUser)
router.delete('/delete-user/:id', deleteUser)

export default router