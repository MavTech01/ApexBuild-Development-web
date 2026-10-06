import jwt from 'jsonwebtoken'
import User from '../models/User.js'

/**
 * Authentication middleware to protect routes.
 * Verifies Bearer token, checks user existence, and attaches req.user.
 */
export async function protect(req, res, next) {
  let token

  const authHeader = req.headers.authorization
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1]
  }

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized, no token provided',
    })
  }

  try {
    const secret = process.env.JWT_SECRET
    if (!secret) {
      console.error('JWT_SECRET is not configured in environment variables')
      return res.status(500).json({
        success: false,
        message: 'Authentication configuration error',
      })
    }

    const decoded = jwt.verify(token, secret)

    // Lookup user in database without password
    const user = await User.findById(decoded.id).select('-password')
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized, user account no longer exists',
      })
    }

    req.user = user
    next()
  } catch (error) {
    const isExpired = error.name === 'TokenExpiredError'
    return res.status(401).json({
      success: false,
      message: isExpired
        ? 'Not authorized, token has expired'
        : 'Not authorized, token is invalid',
    })
  }
}
