const express = require('express');
const morgan = require('morgan'); //gerenciador do servidor
const bodyParser = require('body-parser');

const app = express(); //api que estou usando para fazer o server

app.set('port', process.env.PORT || 3000); //seta a porta do servidor
app.use(morgan('dev')); //modo dev de gerenciar o server
app.unsubscribe(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false})); // intermédio server-app
app.use(bodyParser.json());
//app.use(require('./routes/index.js'));

module.exports = app;
