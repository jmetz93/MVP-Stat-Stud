const request = require('request');

const config = require('../database/config/index.js');


let getPlayer = (player, callback) => {
  player = player.split(' ');
  const option = {
  url:`http://api.suredbits.com/nba/v0/players/${player[1]}/${player[0]}`
  }
  request(option, (err, res, body) => {
    if (err) {
      console.log('There was an error');
      return callback(err, null);
    } else {
      
      console.log('Player info', body);
      
      callback(null, JSON.parse(body[0]));
    }
  })
} 

module.exports.getPlayer = getPlayer;


