const db = require('../connection');

const getHomepageMaps = () => {
  return db.query('SELECT m.title, u.username FROM maps m JOIN users u ON m.user_id = u.id;')
    .then(data => {
      console.log(data.rows);
      return data.rows;
    });
};

module.exports = { getHomepageMaps };
