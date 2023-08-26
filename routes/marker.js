//implemented in maps/edit/1 instead of a separate marker

const express = require('express');
const router  = express.Router();

//const createMarker = require('../db/queries/createMarker');
const bodyParser = require('body-parser');
const createMarkerQuery = require('../db/queries/createMarker');
const deleteMarkerQuery = require('../db/queries/deleteMarker');

router.get('/', (req, res) => {
  // console.log(req.query);
  // let markerTitle = req.body.markerTitle;
  // let markerDescription = req.body.markerDescription;
  // let markerURL = req.body.markerURL;
  // console.log(markerTitle, markerDescription, markerURL);
  // res.redirect('/profile');
  res.send("🤗");
});
// do a post to /marker/anything you want
router.post('/:userId', (req, res) => {
  const userId = req.params.userId;
  console.log('marker user id ===============>' +userId);
  let lat = req.body.lat;
  let long = req.body.lng;

  console.log(req.body);

  const markerParams = {
    title: req.body.markerTitle,
    description: req.body.markerDescription,
    URL: req.body.markerURL,
    lat: req.body.markerLat,
    long: req.body.markerLong
  }
  createMarkerQuery.createMarker(markerParams)
    .then(marker => {

      console.log(marker);
      res.redirect(`/profile/${userId}`);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});
// marker/delete/anything you want
router.post("/delete/:point", (req, res) => {
  let markerParams = req.params.point;

  console.log('heelllo nurse')

  deleteMarkerQuery.deleteMarker(markerParams)
  .then(marker => {
    console.log('deleted');
    res.redirect('/maps/edit/1');
  });
})

module.exports = router;
