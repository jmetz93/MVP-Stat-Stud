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

module.exports = {
  db
}


