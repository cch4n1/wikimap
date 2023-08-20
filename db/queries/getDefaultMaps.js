const db = require('../connection');

const getDefaultMaps = () => {
  return db.query('SELECT m.title, u.username, m.description FROM maps m JOIN users u ON m.user_id = u.id;')
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};

module.exports = { getDefaultMaps };
