const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  item: String
});

module.exports = mongoose.model('Todo', todoSchema);

