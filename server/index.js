const express = require('express');
const parser = require('body-parser');
const path = require('path');
const sequelize = require('sequelize');
const app = express();

const helper = require('../helpers/suredbits.js');
const db = require('../database/config');

const port = 3000;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static(__dirname + '/client'));

app.get('/client', (req, res) => {
  db.Player.findAll().then((players) => {
    res.send(players);
  })
});

app.post('/client', function (req, res) {
  helper.getPlayer(req.body.data, (err, playerInfo) => {
    if (err) {
      return res.send(err);
    } 
    db.Player.create({
      player_id: playerInfo.playerId,
      name: playerInfo.fullName,
      status: playerInfo.status,
      draft_year: playerInfo.rookieYear,
      current_team: playerInfo.team,
    }).then((err, result) => {
        if (err) {
          console.log(err);
        }  else {
           
           res.send(JSON.parse(playerInfo));
        }
    })
  })
});

app.listen(port, () => {
  console.log('listening on PORT: ', port);
});