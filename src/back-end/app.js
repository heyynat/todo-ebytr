const express = require('express');

const Controller = require('./controllers');

const cors = require("cors");

const app = express();

app.use(express.json());


// Corrige - No 'Access-Control-Allow-Origin' header is present on the requested resource—when trying to get data from a REST API
// Fonte da correção: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe

const corsOptions = {
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions));

app.get('/', (request, response) => {
  response.send();
});

app.post('/todo', Controller.create);
app.get('/todo', Controller.findAll);
app.put('/todo/:id', Controller.update);
app.delete('/todo/:id', Controller.exclude);

module.exports = app;
