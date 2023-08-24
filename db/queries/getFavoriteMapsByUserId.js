const db = require("../connection");

const getFavoriteMapsByUserId = (userId) => {
  return db
    .query(
      `
      SELECT * FROM maps
      WHERE user_id = $1 AND favourite = true
    `,
      [userId]
    )
    .then((data) => data.rows);
};

module.exports = { getFavoriteMapsByUserId };
