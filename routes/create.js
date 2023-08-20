/*
 * All routes for create are defined here
 * Since this file is loaded in server.js into /create,
 *   these routes are mounted onto /create
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const createMapQuery = require('../db/queries/create-map');

router.get('/', (req, res) => {
  res.render('create');
});

// router.post('/', (req, res) => {
//   if (1===1) {
//     res.redirect('/profile')
//   }
// });

router.post('/', (req, res) => {
  // console.log(req.body.mapTitle);
  const mapParams = req.body.mapTitle;
  createMapQuery.createMap(mapParams)
    .then(map => {
      // console.log(map);
      console.log('---------->>> this is a test of the route');
      res.redirect('/profile');
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  // res.redirect('/profile');
});

module.exports = router;
