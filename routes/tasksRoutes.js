const express = require('express');
const router = express.Router();

const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController.js');

router.post('/create', createTask);
router.get('/gettasks', getTasks);
router.put('/edit/:id', updateTask);
router.delete('/delete/:id', deleteTask);

module.exports = router;