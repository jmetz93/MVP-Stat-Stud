const express = require('express');
const parser = require('body-parser');
const path = require('path');
const app = express();

const db = require('../database/config');

const port = 3000;

app.use(parser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/clientpart'));

app.get('/hi', (req, res) => {
  res.send('hi');
});

app.post('/hi',(req, res) => {
  res.send('yo');
});

app.listen(port, () => {
  console.log('listening on PORT: ', port);
});