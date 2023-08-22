/*
 * All routes for maps are defined here
 * Since this file is loaded in server.js into /faves,
 *   these routes are mounted onto /faves
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const displayPointsQuery = require('../db/queries/get-points-for-map-view.js');

//view map
router.get('/1', (req, res) => {
  
  //change mapId to match map you are trying to
  const mapId = 3;

  displayPointsQuery.getPoints(mapId)
    .then((points) => {
      const templateVars = {
        points
      }
      res.render('viewMap', templateVars);
    })
});

//edit map
router.get('/edit/1', (req, res) => {
  res.render('editMap');
})

//delete map
router.post('/1/delete', (req, res) => {
  res.redirect('profile');
});

module.exports = router;
