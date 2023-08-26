/*
 * All routes for create are defined here
 * Since this file is loaded in server.js into /create,
 *   these routes are mounted onto /create
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require("../db/queries/getUsernameById");
const mapQueries = require("../db/queries/getMapsByUserId"); // Add this line
const createMapQuery = require('../db/queries/create-map');

router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
  Promise.all([
    userQueries.getUsernameById(userId),
    mapQueries.getMapsByUserId(userId),
  ])
    .then((results) => {
      const username = results[0];
      const maps = results[1];

      if (username) {
        // Render the profile view with the username, maps, and ID
        res.render("create", {
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

router.post('/:userId', (req, res) => {
  const userId = req.params.userId;

  const mapParams = {
    id: userId,
    title: req.body.mapTitle,
    lat: req.body.markerLat || '51.505',
    long: req.body.markerLong || '-0.09'
  };

  createMapQuery.createMap(mapParams)
    .then(maps => {
      const createdMap = maps[0];
      res.redirect(`/profile/${createdMap.user_id}`);
    })
    .catch(err => {
      console.error("Error occurred:", err);
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;



module.exports = router;
