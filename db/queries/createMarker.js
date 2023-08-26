const db = require('../connection');

const createMarker = (params) => {
  return db.query(`
  INSERT INTO points (map_id, title, description, latitude, longitude, image)
  VALUES
  ($1, $2, $3, $4, $5, $6)
  RETURNING *
  `, [params.mapId, params.title, params.description, params.lat, params.long, params.URL])
    .then(data => {
      return data.rows;
    });
};

module.exports = { createMarker };
