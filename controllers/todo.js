const Todo = require('../models/todo');

exports.get_todo_list = (req, res, next) => { 
  Todo.find()
    .exec()
    .then(data => {
      res.render('todo', {todos: data});
    })
    .catch(err => {
      console.log(err);
      //res.render('error');  
    });
};

exports.post_todo = (req, res, next) => { 
  const todo = new Todo({
    item: req.body.item
  });
  todo.save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      //res.render('error');
    });
};
 
exports.delete_todo = (req, res, next) => { 
  const item = req.params.item;  
  Todo.remove({ item: item })
    .exec()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      //res.render('error');
    });
};

