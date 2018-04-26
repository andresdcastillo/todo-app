const express = require('express');
const todoRoutes = require('./routes/todo');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const secrets = require('./config/secrets');

app.set('view engine', 'ejs');

mongoose.connect(secrets.mongodb.dbURI, () => {
  console.log('Connected to MongoDB')
});

app.use(express.static('./public'));

app.use('/', todoRoutes);

app.use((req, res, next) => {
  res.render('error404');
});

app.listen(port, () => {
  console.log('To-Do App is running on port ' + port);
});
