const db = require("../connection");

const toggleFavorite = (mapId, shouldBeFavorited) => {
  return db.query("UPDATE maps SET favourite = $1 WHERE id = $2", [
    shouldBeFavorited,
    mapId,
  ]);
};


module.exports = { toggleFavorite };
