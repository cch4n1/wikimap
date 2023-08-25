const db = require("../connection");

const getMapsByUserId = (userId) => {
  return db
    .query("SELECT m.* FROM maps m WHERE m.user_id = $1;", [userId])
    .then((data) => {
      return data.rows; // This will return all the maps associated with that user ID.
    });
};

module.exports = { getMapsByUserId };
