import 'dotenv/config'
import mongoose from 'mongoose'
import User from '../models/User.js'
import { connectDB } from '../config/db.js'

async function seedAdmin() {
  const name = process.env.INITIAL_ADMIN_NAME || 'ApexBuild Admin'
  const email = process.env.INITIAL_ADMIN_EMAIL || 'admin@apexbuild.com'
  const password = process.env.INITIAL_ADMIN_PASSWORD || 'AdminSecurePass2026!'

  console.log('--- Seeding Initial Admin User ---')
  console.log(`Connecting to MongoDB...`)

  const connected = await connectDB()
  if (!connected) {
    console.error('❌ Could not connect to database. Aborting admin seeding.')
    process.exit(1)
  }

  try {
    const existing = await User.findOne({ email: email.toLowerCase().trim() })
    if (existing) {
      console.log(`ℹ️  Admin with email '${email}' already exists (ID: ${existing._id}).`)
      await mongoose.disconnect()
      process.exit(0)
    }

    const admin = await User.create({
      name,
      email: email.toLowerCase().trim(),
      password,
      role: 'admin',
    })

    console.log(`✅ Admin account created successfully!`)
    console.log(`   ID: ${admin._id}`)
    console.log(`   Name: ${admin.name}`)
    console.log(`   Email: ${admin.email}`)
    console.log(`   Role: ${admin.role}`)
  } catch (error) {
    console.error(`❌ Error creating admin user:`, error.message)
    process.exitCode = 1
  } finally {
    await mongoose.disconnect()
    console.log('Database disconnected.')
  }
}

seedAdmin()
