const express = require('express')
const router = express.Router();
const TaskController = require('../controllers/task')

// add a user
router.post('/', TaskController.createTask)
// get all users
router.get('/', TaskController.listTasks)
// get a user by id
router.get('/:id', TaskController.listTasks)

module.exports = router