/*
 * All routes for maps are defined here
 * Since this file is loaded in server.js into /faves,
 *   these routes are mounted onto /faves
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const bodyParser = require('body-parser');
const createMarkerQuery = require('../db/queries/createMarker');

//view map
router.get('/1', (req, res) => {
  res.render('viewMap');
});

//edit map
router.get('/edit/1', (req, res) => {
  res.render('editMap');
})

//edit map
router.post('/edit/1', (req, res) => {
  let lat = req.body.lat;
  let long = req.body.lng;

  const markerParams = [lat, long];
  createMarkerQuery.createMarker(markerParams)
    .then(marker => {
      console.log(marker);
      res.redirect('/profile');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
})

//delete map
router.post('/1/delete', (req, res) => {
  res.redirect('profile');
});

module.exports = router;
