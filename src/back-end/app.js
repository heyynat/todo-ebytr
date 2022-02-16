const express = require('express');

const Controller = require('./controllers');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.send();
});

app.post('/todo', Controller.create);
app.get('/todo', Controller.findAll);
app.put('/todo/:id', Controller.update);
app.delete('/todo/:id', Controller.exclude);

module.exports = app;
