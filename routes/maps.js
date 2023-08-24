/*
 * All routes for maps are defined here
 * Since this file is loaded in server.js into /faves,
 *   these routes are mounted onto /faves
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const mapQueries = require("../db/queries/toggleFavorite");

//view map
router.get("/1", (req, res) => {
  res.render("viewMap");
});

//edit map
router.get("/edit/1", (req, res) => {
  res.render("editMap");
});

//delete map
router.post("/1/delete", (req, res) => {
  res.redirect("profile");
});

router.post("/favourite/:mapId", (req, res) => {
  console.log(true);
  const mapId = req.params.mapId;
  const shouldBeFavorited = req.body.favourited === "true";

  mapQueries
    .toggleFavorite(mapId, shouldBeFavorited)
    .then(() => {
      res.json({ success: true });
    })
    .catch((error) => {
      console.error(error);
      res.json({ success: false });
    });
});

module.exports = router;
