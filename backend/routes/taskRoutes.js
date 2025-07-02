const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

const {
  getTasks,
  createTask,
  updateTaskStatus,
  updateTaskPriority,
  deleteTask,
  getTaskById
} = require('../controllers/taskController');

router.get('/', authMiddleware, getTasks);
router.post('/', authMiddleware, createTask);
router.patch('/:id/status', authMiddleware, updateTaskStatus);
router.patch('/:id/priority', authMiddleware, updateTaskPriority);
router.delete('/:id', authMiddleware, deleteTask);
router.get('/:id', authMiddleware, getTaskById);

module.exports = router;