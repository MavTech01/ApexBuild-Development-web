import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import projectRoutes from './routes/projectRoutes.js'

const app = express()

// Global Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  const dbStates = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting',
  }

  const dbState = dbStates[mongoose.connection.readyState] || 'unknown'

  res.status(200).json({
    status: 'ok',
    message: 'ApexBuild API is running',
    database: dbState,
    timestamp: new Date().toISOString(),
  })
})

// API Routes
app.use('/api/projects', projectRoutes)

// 404 Handler for undefined API routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  })
})

// Centralized Error Handling Middleware
app.use((err, req, res, _next) => {
  console.error('Unhandled Server Error:', err.message || err)
  const statusCode = err.statusCode || err.status || 500
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
  })
})

export default app
