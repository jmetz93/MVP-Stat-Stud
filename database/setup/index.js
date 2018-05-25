const { db } = require('../config');
const { Player } = require('../models');
const { Seasons } = require('../models');

Models.Player.sync({ force: true }).then(() => {
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



