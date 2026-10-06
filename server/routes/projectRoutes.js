import { Router } from 'express'
import {
  getProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController.js'

const router = Router()

// Routes structured so auth middleware (e.g., protect) can easily be added to mutation endpoints
router.route('/')
  .get(getProjects)
  .post(createProject)

router.route('/:id')
  .get(getProject)
  .put(updateProject)
  .delete(deleteProject)

export default router
