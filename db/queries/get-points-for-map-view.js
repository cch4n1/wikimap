const db = require('../connection');

/**
 * get Points function
 * takes in the map_id for a specific map
 * and returns a list of all the names and descriptions 
 * of all the points on the map
 * @param {integer} mapId
 * @returns {Promise<Array<Object>>}
 */
const getPoints = (mapId) => {
  return db.query(`
    SELECT title as "Point_of_Interest", description 
    FROM points
    WHERE map_id = $1;
  `, [mapId])
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error; // Handle or log the error appropriately
    });
};

module.exports = { getPoints };