var data = [{item: 'item 1'}, {item: 'item 2'}, {item: 'item 3'}];

exports.get_todo_list = (req, res, next) => { 
  res.render('todo', {todos: data});
};

exports.post_todo = (req, res, next) => { 
  data.push(req.body);
  res.json(data); 
};
 
exports.delete_todo = (req, res, next) => { 
  data = data.filter((todo) => {
    return todo.item.replace(/ /g, '-') !== req.params.item;
  });
  res.json(data);
};

