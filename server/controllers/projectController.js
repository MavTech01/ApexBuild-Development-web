import mongoose from 'mongoose'
import Project from '../models/Project.js'

/**
 * Helper to find a project by either MongoDB ObjectId or by slug
 */
async function findProjectByIdOrSlug(identifier) {
  if (mongoose.Types.ObjectId.isValid(identifier)) {
    const byId = await Project.findById(identifier)
    if (byId) return byId
  }
  return Project.findOne({ slug: identifier })
}

/**
 * @desc   Get all projects
 * @route  GET /api/projects
 * @access Public
 */
export async function getProjects(req, res, next) {
  try {
    const filter = {}
    if (req.query.category) {
      filter.categorySlug = req.query.category.toLowerCase()
    }

    const projects = await Project.find(filter).sort({ createdAt: -1 })
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Get single project by ID or slug
 * @route  GET /api/projects/:id
 * @access Public
 */
export async function getProject(req, res, next) {
  try {
    const project = await findProjectByIdOrSlug(req.params.id)

    if (!project) {
      return res.status(404).json({
        success: false,
        message: `Project not found with identifier '${req.params.id}'`,
      })
    }

    res.status(200).json({
      success: true,
      data: project,
    })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Create new project
 * @route  POST /api/projects
 * @access Public (prepared for auth middleware in Phase 3)
 */
export async function createProject(req, res, next) {
  try {
    const project = await Project.create(req.body)
    res.status(201).json({
      success: true,
      data: project,
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message)
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: messages,
      })
    }
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'A project with this title or slug already exists',
      })
    }
    next(error)
  }
}

/**
 * @desc   Update project
 * @route  PUT /api/projects/:id
 * @access Public (prepared for auth middleware in Phase 3)
 */
export async function updateProject(req, res, next) {
  try {
    const existing = await findProjectByIdOrSlug(req.params.id)

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: `Project not found with identifier '${req.params.id}'`,
      })
    }

    const updated = await Project.findByIdAndUpdate(
      existing._id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    )

    res.status(200).json({
      success: true,
      data: updated,
    })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message)
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: messages,
      })
    }
    next(error)
  }
}

/**
 * @desc   Delete project
 * @route  DELETE /api/projects/:id
 * @access Public (prepared for auth middleware in Phase 3)
 */
export async function deleteProject(req, res, next) {
  try {
    const existing = await findProjectByIdOrSlug(req.params.id)

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: `Project not found with identifier '${req.params.id}'`,
      })
    }

    await Project.findByIdAndDelete(existing._id)

    res.status(200).json({
      success: true,
      message: 'Project deleted successfully',
    })
  } catch (error) {
    next(error)
  }
}
