const db = require('../connection');

const createMap = (params) => {
  return db.query(`
  INSERT INTO maps (user_id, title, latitude, longtitude)
  VALUES
  (3, $1, $2, $3)
  RETURNING *
  `, [params.title, params.lat, params.long])
    .then(data => {
      return data.rows;
    });
};

module.exports = { createMap };
