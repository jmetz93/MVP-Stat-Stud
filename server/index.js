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
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/players', (req, res) => {
  db.Player.findAll({
    order: [[ 'id', 'DESC']],
    limit: 25
  }).then((players) => {
    res.send(players);
  })
});

app.post('/players', function (req, res) {
  console.log('Request for ', req.body);
  helper.getPlayer(req.body.data, (err, playerInfo) => {
    if (err) {
      return res.send(err);
    } 
    console.log('Player info ', playerInfo[0])
    db.Player.create({
      player_id: playerInfo[0].playerId,
      name: playerInfo[0].fullName,
      status: playerInfo[0].status,
      draft_year: playerInfo[0].rookieYear,
      current_team: playerInfo[0].team,
    }).then((result) => {
        res.send(playerInfo);
    }).catch((err) => {
        res.send(err);
      })
  })
});

app.listen(port, () => {
  console.log('listening on PORT: ', port);
});