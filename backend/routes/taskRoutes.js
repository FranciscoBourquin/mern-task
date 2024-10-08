const express = require('express');
const router = express.Router();
const { getTasks, setTask, updateTask, toggleTaskCompletion, deleteTask } = require('../controllers/taskController');

const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getTasks)
router.post('/', protect, setTask)
router.put('/:id', protect, updateTask)
router.patch('/:id/toggle', protect, toggleTaskCompletion);
router.delete('/:id', protect, deleteTask)

module.exports = router;
