import express from 'express'
const router = express.Router()
import {userLogin, userSignup} from '../controllers/userController.js'

router.post('/signup', userSignup)
router.post('/login', userLogin)

export default router