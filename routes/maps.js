/*
 * All routes for maps are defined here
 * Since this file is loaded in server.js into /faves,
 *   these routes are mounted onto /faves
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const mapQueries = require("../db/queries/toggleFavorite");
const displayPointsQuery = require("../db/queries/get-points-for-map-view.js");
const createMarkerQuery = require("../db/queries/createMarker");

//view map
router.get("/:userId", (req, res) => {
  const mapId = 3; //change this later

  Promise.all([
    displayPointsQuery.getPoints(mapId),
    displayPointsQuery.getMap(mapId),
  ])
    .then(([points = [], viewMap = []]) => {
      const templateVars = {
        points,
        viewMap,
      };
      // console.log(vmap)
      res.render("viewMap", templateVars);
    })
    .catch((err) => {
      // Handle any errors here
      console.error(err);
      res.status(500).send("Error fetching data");
    });
});

//edit map
router.get("/edit/:mapId", (req, res) => {
  const printOut = req.params.mapId;

  console.log('THIS IS THE USERID =====>' + printOut);
  const mapId = 3;

  displayPointsQuery.getPoints(mapId).then((points = []) => {
    const templateVars = {
      points,
    };
    // console.log(points)
    res.render("editMap", templateVars);
  });
  // res.render('editMap');
});

// //edit map
// router.post('/edit/1', (req, res) => {
//   let lat = req.body.lat;
//   let long = req.body.lng;

//   console.log(req.body);

//   const markerParams = {
//     title: req.body.markerTitle,
//     description: req.body.markerDescription,
//     URL: req.body.markerURL,
//     lat: req.body.markerLat,
//     long: req.body.markerLong
//   }
//   createMarkerQuery.createMarker(markerParams)
//     .then(marker => {
//       console.log(marker);
//       res.redirect('/profile');
//     })
//     .catch(err => {
//       res
//         .status(500)
//         .json({ error: err.message });
//     });
// })

//delete map
router.post("/1/delete", (req, res) => {
  res.redirect("profile");
});

router.post("/favourite/:mapId", (req, res) => {
  console.log(true);
  const mapId = req.params.mapId;
  const shouldBeFavorited = req.body.favourited === "true";

  mapQueries
    .toggleFavorite(mapId, shouldBeFavorited)
    .then(() => {
      res.json({ success: true });
    })
    .catch((error) => {
      console.error(error);
      res.json({ success: false });
    });
});

module.exports = router;
