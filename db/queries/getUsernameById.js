const db = require('../connection');

const getUsernameById = (userId) => {
  return db.query('SELECT u.username FROM users u WHERE u.id = $1;', [userId])
    .then(data => {
      return data.rows[0].username; // Here, we're returning only the username.
    });
};

module.exports = { getUsernameById };
