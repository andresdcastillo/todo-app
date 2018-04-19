const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todo');

router.get('/', todoController.get_todo_list);
router.post('');
router.delete('');

module.exports = router;
