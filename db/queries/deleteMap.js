const db = require('../connection');

const deleteMap = (params) => {
  return db.query(`
  DELETE FROM maps WHERE id=$1
  RETURNING *
  `, [params])
    .then(data => {
      return data.rows;
    });
};

module.exports = { deleteMap };
