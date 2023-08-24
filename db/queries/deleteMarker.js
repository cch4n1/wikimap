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

module.exports = { deleteMarker };
