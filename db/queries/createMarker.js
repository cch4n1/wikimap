const db = require('../connection');

const createMarker = (params) => {
  return db.query(`
  INSERT INTO points (map_id, title, description, latitude, longitude, image)
  VALUES
  (3, 'Historic Landmark', 'Significant historical site.', $1, $2, 'landmark.jpg')
  RETURNING *
  `, [params[0], params[1]])
    .then(data => {
      return data.rows;
    });
};

module.exports = { createMarker };
