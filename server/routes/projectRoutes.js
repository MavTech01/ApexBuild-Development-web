import { Router } from 'express'
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js'
import { protect } from '../middleware/auth.js'

const router = Router()

// Public read access for all projects; protected mutation for creating projects
router.route('/')
  .get(getProjects)
  .post(protect, createProject)

// Public read access by ID/slug; protected mutations for updating & deleting
router.route('/:id')
  .get(getProject)
  .put(protect, updateProject)
  .delete(protect, deleteProject)

export default router
