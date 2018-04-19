const express = require('express');
const todoRoutes = require('./routes/todo');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.use('/todo', todoRoutes);

app.listen(port, () => {
  console.log('To-Do App is running on port ' + port)
});
