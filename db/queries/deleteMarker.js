const db = require('../connection');

const deleteMarker = (params) => {
  return db.query(`
  DELETE FROM points WHERE id=$1
  RETURNING *
  `, [params])
    .then(data => {
      return data.rows;
    });
};

const getUserandMap = (params) => {
  return db.query(`SELECT maps.id AS map_id, users.id AS user_id
  FROM points
  INNER JOIN maps ON points.map_id = maps.id
  INNER JOIN users ON maps.user_id = users.id
  WHERE points.id = $1;`, [params])
    .then(data => {
      return data.rows[0]; // Here, we're returning only the username.
    });
};

module.exports = { deleteMarker, getUserandMap };
