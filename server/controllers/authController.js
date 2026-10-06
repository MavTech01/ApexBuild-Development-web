import jwt from 'jsonwebtoken'
import User from '../models/User.js'

/**
 * Helper to generate JWT token for a user
 */
function generateToken(user) {
  const secret = process.env.JWT_SECRET
  if (!secret) {
    throw new Error('JWT_SECRET is not configured')
  }
  const expiresIn = process.env.JWT_EXPIRES_IN || '7d'
  return jwt.sign({ id: user._id, role: user.role }, secret, { expiresIn })
}

/**
 * @desc   Admin login
 * @route  POST /api/auth/login
 * @access Public
 */
export async function login(req, res, next) {
  try {
    const { email, password } = req.body

    // Validate input presence
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both email and password',
      })
    }

    // Find user and explicitly include password field for verification
    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    }).select('+password')

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      })
    }

    // Verify password hash
    const isMatch = await user.comparePassword(password)
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password',
      })
    }

    // Generate JWT
    const token = generateToken(user)

    // Respond with user details (excluding password)
    res.status(200).json({
      success: true,
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Get current authenticated admin user
 * @route  GET /api/auth/me
 * @access Private (Admin)
 */
export async function getMe(req, res, next) {
  try {
    res.status(200).json({
      success: true,
      user: {
        id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        role: req.user.role,
      },
    })
  } catch (error) {
    next(error)
  }
}
