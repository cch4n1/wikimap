const db = require("../connection");

const getUserByMapId = (mapId) => {
  return db
    .query("SELECT * FROM maps WHERE maps.id = $1;", [mapId])
    .then((data) => {
      return data.rows; // This will return all the maps associated with that user ID.
    });
};

module.exports = { getUserByMapId };
