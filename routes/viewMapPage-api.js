const express = require("express");
const router = express.Router();
const mapPointsQueries = require("../db/queries/get-points-for-map-view");


router.get("/maps/1", (req, res) => {
  const mapId = 3;
  mapPointsQueries
    .getPoints(mapId)
      //points is the select query, see: ./scripts/viewMapPage.js
    .then((points) => {
      res.json({ points });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
