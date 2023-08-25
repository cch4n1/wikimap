const db = require('../connection');

/**
 * get Points function
 * takes in the map_id for a specific map
 * and returns a list of all the names and descriptions 
 * of all the points on the map
 * @param {integer} mapId
 * @returns 
 */
const getPoints = (mapId) => {
  return db.query(`
  SELECT * 
  FROM points
  WHERE map_id = ${mapId};
  `)
    .then(data => {
      return data.rows;
    });
};

/**
 * get Map function
 * takes in the map_id for a specific map
 * and returns details of map 
 * @param {integer} mapId
 * @returns 
 */
const getMap = (mapId) => {
  return db.query(`
  SELECT * 
  FROM maps
  WHERE id = ${mapId}
  LIMIT 1;
  `)
    .then(data => {
      return data.rows;
    });
};

module.exports = { getPoints, getMap };
