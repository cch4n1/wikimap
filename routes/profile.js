/*
 * All routes for profile are defined here
 * Since this file is loaded in server.js into /profile,
 *   these routes are mounted onto /profile
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/getUsernameById");
const mapQueries = require("../db/queries/getMapsByUserId"); // Add this line

// http://localhost:8080/profile/3

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;

  Promise.all([
    userQueries.getUsernameById(userId),
    mapQueries.getMapsByUserId(userId),
  ])
    .then((results) => {
      console.log("All Promises Resolved:", results);

      const username = results[0];
      const maps = results[1];

      console.log("Username:", username);
      console.log("Maps:", maps);

      if (username) {
        // Render the profile view with the username, maps, and ID
        res.render("profile", {
          user: { id: userId, username: username },
          userMaps: maps,
        });
      } else {
        // Handle the case when the username isn't found for the given userId
        res.status(404).send("User not found for the given User ID");
      }
    })
    .catch((err) => {
      console.error("Error in Promise.all:", err);
      res.status(500).send("Server Error");
    });
});

module.exports = router;
