const Sequelize = require('sequelize');

const data = require('../../data.json');

const db = new Sequelize('statstud', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
});

db.authenticate()
  .then(() => {
    console.log('Successfully connected to Database');
  })
  .catch((err) => {
    console.error('Unable to connect to database', err)
  });

const Player = db.define('player', {
  player_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  status: Sequelize.STRING,
  draft_year: Sequelize.INTEGER,
  current_team: Sequelize.STRING,
  //searches: Sequelize.INTEGER
});


// const Stats = db.define('stats', {
//   minutes: Sequelize.INTEGER,
//   points: Sequelize.INTEGER,
//   rebounds: Sequelize.INTEGER,
//   assists: Sequelize.INTEGER,
//   steals: Sequelize.INTEGER,
//   blocks: Sequelize.INTEGER,
//   turnovers: Sequelize.INTEGER,
//   plusminus: Sequelize.INTEGER
// });

// Player.hasOne(Season);


module.exports = {
  db,
  Player
}





