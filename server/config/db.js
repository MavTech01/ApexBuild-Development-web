import mongoose from 'mongoose'

/**
 * Connect to MongoDB using the MONGODB_URI environment variable.
 * Logs clear connection status without masking errors.
 */
export async function connectDB() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    console.warn('⚠️  MONGODB_URI is not defined in environment variables.')
    return false
  }

  try {
    const conn = await mongoose.connect(uri)
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
    return true
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`)
    return false
  }
}
