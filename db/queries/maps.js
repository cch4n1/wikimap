const db = require('../connection');

const getMaps = () => {
  return db.query('SELECT title FROM maps;')
    .then(data => {
      return data.rows;
    });
};

module.exports = { getMaps };
