import { Router } from 'express'
import { login, getMe } from '../controllers/authController.js'
import { protect } from '../middleware/auth.js'

const router = Router()

// Public login endpoint
router.post('/login', login)

// Protected user profile endpoint
router.get('/me', protect, getMe)

export default router
