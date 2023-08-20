const db = require('../connection');

const createMap = (params) => {
  return db.query(`
  INSERT INTO maps (user_id, title, latitude, longtitude)
  VALUES
  (3, $1, 34.0522, -118.2437)
  RETURNING *
  `, [params])
    .then(data => {
      return data.rows;
    });
};

module.exports = { createMap };
