/*
 * All routes for faves are defined here
 * Since this file is loaded in server.js into /faves,
 *   these routes are mounted onto /faves
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/getUsernameById");
const mapQueries = require("../db/queries/getFavoriteMapsByUserId"); // Adjust path as necessary

router.get('/', (req, res) => {
  res.render('faves');
});

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;

  Promise.all([
    userQueries.getUsernameById(userId),
    mapQueries.getFavoriteMapsByUserId(userId),  // Use the new function
  ])
    .then(([username, maps]) => {
      if (username) {
        res.render("faves", {  // Assuming you have a separate template for favorites
          user: { id: userId, username: username },
          userMaps: maps,
        });
      } else {
        res.status(404).send("User not found for the given User ID");
      }
    })
    .catch((err) => {
      console.error("Error occurred:", err);
      res.status(500).send("Server Error");
    });
});


module.exports = router;
