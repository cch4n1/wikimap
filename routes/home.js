/*
 * All routes for home are defined here
 * Since this file is loaded in server.js into /profile,
 *   these routes are mounted onto /profile
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const displayMapQuery = require('../db/queries/display-all-maps');

router.get('/', (req, res) => {

  displayMapQuery.displayAllMaps()
    .then((maps) => {
      const templateVars = {
        maps
      }
      console.log(maps);
      res.render('index', templateVars)
    })
});

module.exports = router;
