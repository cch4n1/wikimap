const express = require("express");
const router = express.Router();
const mapQueries = require("../db/queries/getHomepageMaps");

router.get("/", (req, res) => {
  mapQueries
    .getHomepageMaps()
    .then((maps) => {
      res.json({ maps });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
