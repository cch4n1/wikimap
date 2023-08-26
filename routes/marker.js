//implemented in maps/edit/1 instead of a separate marker

const express = require('express');
const router  = express.Router();

//const createMarker = require('../db/queries/createMarker');
const bodyParser = require('body-parser');
const createMarkerQuery = require('../db/queries/createMarker');
const deleteMarkerQuery = require('../db/queries/deleteMarker');
// const getUserMapQuery = require('../db/queries/getUserandMap');

router.get('/', (req, res) => {
  // console.log(req.query);
  // let markerTitle = req.body.markerTitle;
  // let markerDescription = req.body.markerDescription;
  // let markerURL = req.body.markerURL;
  // console.log(markerTitle, markerDescription, markerURL);
  // res.redirect('/profile');
  res.send("🤗");
});

// marker/delete/anything you want
router.post("/delete/:point", (req, res) => {
  let markerParams = req.params.point;

  console.log('heelllo nurse')

  Promise.all([
    deleteMarkerQuery.getUserandMap(markerParams),
    deleteMarkerQuery.deleteMarker(markerParams)
  ])
  .then(userAndMap => {
    res.redirect(`/maps/edit/${userAndMap[0].user_id}/${userAndMap[0].map_id}`);
  });
})

// do a post to /marker/anything you want
router.post('/:userId/:mapId', (req, res) => {
  const userId = req.params.userId;
  const mapId = req.params.mapId;
  console.log('marker user id ===============>' +userId);
  let lat = req.body.lat;
  let long = req.body.lng;

  console.log(req.body);

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

      console.log(marker);
      res.redirect(`/maps/edit/${mapId}/${userId}`);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});


module.exports = router;
