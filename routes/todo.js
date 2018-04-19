const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const todoController = require('../controllers/todo');

router.get('/', todoController.get_todo_list);
router.post('/', urlencodedParser, todoController.post_todo);
router.delete('/:item', todoController.delete_todo);

module.exports = router;
