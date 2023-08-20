const db = require('../connection');

const displayAllMaps = () => {
  return db.query(`
  SELECT maps.title as Map_Name, users.username as Owner FROM
  users JOIN maps ON users.id = maps.user_id;
  `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { displayAllMaps };
