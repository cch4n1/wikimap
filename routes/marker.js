//implemented in maps/edit/1 instead of a separate marker

const express = require('express');
const router  = express.Router();

//const createMarker = require('../db/queries/createMarker');
const bodyParser = require('body-parser');
const createMarkerQuery = require('../db/queries/createMarker');
const deleteMarkerQuery = require('../db/queries/deleteMarker');
// const getUserMapQuery = require('../db/queries/getUserandMap');

router.get('/', (req, res) => {
  res.send("🤗");
});

// marker/delete/anything you want
router.post("/delete/:point", (req, res) => {
  let markerParams = req.params.point;

  Promise.all([
    deleteMarkerQuery.getUserandMap(markerParams),
    deleteMarkerQuery.deleteMarker(markerParams)
  ])
  .then(userAndMap => {
    res.redirect(`/maps/edit/${userAndMap[0].map_id}/${userAndMap[0].user_id}`);
  })
  .catch((err) => {
    // Handle any errors here
    console.error(err);
    res.status(500).send("Error fetching data");
  });
})

// do a post to /marker/anything you want
router.post('/:userId/:mapId', (req, res) => {
  const userId = req.params.userId;
  const mapId = req.params.mapId;

  let lat = req.body.lat;
  let long = req.body.lng;

  const markerParams = {
    mapId,
    title: req.body.markerTitle,
    description: req.body.markerDescription,
    URL: req.body.markerURL,
    lat: req.body.markerLat,
    long: req.body.markerLong
  }
  createMarkerQuery.createMarker(markerParams)
    .then(marker => {

      res.redirect(`/maps/edit/${mapId}/${userId}`);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
