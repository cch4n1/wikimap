/*
 * All routes for home are defined here
 * Since this file is loaded in server.js into /profile,
 *   these routes are mounted onto /profile
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const displayMapQuery = require("../db/queries/display-all-maps");
const userQueries = require("../db/queries/getUsernameById"); // Import the needed function


// For non-logged in users
router.get("/", (req, res) => {
  displayMapQuery
    .displayAllMaps() // Query to display all maps for homepage
    .then((maps) => {
      const templateVars = {
        maps: maps,
        user: null, // no user logged in
      };
      res.render("index", templateVars); // render the homepage
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});


// For logged in users --> http://localhost:8080/home/1
router.get("/:id", (req, res) => {
  const userId = req.params.id;

  // Fetch maps and user data in parallel
  Promise.all([
    displayMapQuery.displayAllMaps(), // display all maps on the homepage
    userQueries.getUsernameById(userId), // get username using :id from browser
  ])
    .then(([maps, username]) => {
      if (username) {
        const templateVars = {
          maps: maps,
          user: { id: userId, username: username }, // Using the directly returned username
        };
        res.render("index", templateVars); // pass the username to home view using template vars
      } else {
        res.status(404).send("User not found");
      }
    })
    .catch((err) => {
      console.error("Error occurred:", err); // Logging the error with console.error for emphasis
      res.status(500).send(err.message);
    });
});

module.exports = router;
