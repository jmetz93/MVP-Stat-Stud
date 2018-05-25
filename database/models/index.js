const Sequelize = require('sequelize');
const { db } = require('../config');

const Player = db.define('player', {
  player_id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  height: Sequelize.INTEGER,
  weight: Sequelize.INTEGER,
  position: Sequelize.STRING,
  number: Sequelize.INTEGER,
  experience: Sequelize.INTEGER,
  college: Sequelize.INTEGER,
  birthday: Sequelize.STRING,
  draft_year: Sequelize.INTEGER,
  searches: Sequelize.INTEGER
});

// Player.sync({ force: true }).then(() => {
//   return Player.create({id: 45684951,
//   name: 'John Smith',
//   height: 65,
//   weight: 156,
//   position: 'C',
//   numer: 69,
//   experience: 5,
//   birthday: '5/5/15',
//   draft_year: 2015,
//   searches: 6
//   });
// });

const Seasons = db.define('seasons', {
  year: Sequelize.Number,
  teams: Sequelize.NUMBER,
  games_played: Sequelize.NUMBER,
  mpg: Sequelize.NUMBER,
  ppg: Sequelize.NUMBER,
  rpg: Sequelize.NUMBER,
  apg: Sequelize.NUMBER,
  spg: Sequelize.NUMBER,
  bpg: Sequelize.NUMBER,
  tpg: Sequelize.NUMBER,
  field_goal_percentage: Sequelize.NUMBER
});

Player.hasMany(Seasons);
Seasons.belongsTo(Players);

module.exports.Players = Players;
module.exports.Seasons = Seasons;
