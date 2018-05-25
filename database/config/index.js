const Sequelize = require('sequelize');
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

const Seasons = db.define('seasons', {
  year: Sequelize.INTEGER,
  teams: Sequelize.INTEGER,
  games_played: Sequelize.INTEGER,
  mpg: Sequelize.INTEGER,
  ppg: Sequelize.INTEGER,
  rpg: Sequelize.INTEGER,
  apg: Sequelize.INTEGER,
  spg: Sequelize.INTEGER,
  bpg: Sequelize.INTEGER,
  tpg: Sequelize.INTEGER,
  field_goal_percentage: Sequelize.INTEGER
});

Player.hasMany(Seasons);
Seasons.belongsTo(Players);

Player.sync({ force: true }).then(() => {
  return Player.create({id: 45684951,
  name: 'John Smith',
  height: 65,
  weight: 156,
  position: 'C',
  numer: 69,
  experience: 5,
  birthday: '5/5/15',
  draft_year: 2015,
  searches: 6
  });
});

module.exports = {
  db,
  Player,
  Seasons
}





