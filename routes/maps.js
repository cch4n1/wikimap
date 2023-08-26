/*
 * All routes for maps are defined here
 * Since this file is loaded in server.js into /faves,
 *   these routes are mounted onto /faves
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const userQueries = require("../db/queries/getUsernameById");
const mapQueries = require("../db/queries/getMapsByUserId");
const displayPointsQuery = require("../db/queries/get-points-for-map-view.js");
const createMarkerQuery = require("../db/queries/createMarker");
const userIdFromMapQuery = require("../db/queries/getUserByMapId");
const deleteMapQuery = require("../db/queries/deleteMap");
const toggleFavorite = require("../db/queries/toggleFavorite")

// //view map for logged out
router.get("/:mapId", (req, res) => {
  const mapId = req.params.mapId;

  Promise.all([
    displayPointsQuery.getPoints(mapId),
    displayPointsQuery.getMap(mapId),
  ])
    .then(([points = [], viewMap = []]) => {
      const templateVars = {
        user: null,
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


//edit map ---- this edit map needs to be above get/mapId/user/id
router.get("/edit/:mapId/:userId", (req, res) => {
  const mapId = req.params.mapId;
  const userId = req.params.userId;

  console.log("this is map id===========>" + mapId);

  Promise.all([
    userQueries.getUsernameById(userId),
    displayPointsQuery.getPoints(mapId),
    displayPointsQuery.getMap(mapId),
    // singleMapQuery.getMapbyMapId(mapId),
  ])
  .then(([username, points = [], viewMap = []]) => {
    const templateVars = {
      user: { id: userId, username: username },
      points,
      viewMap,
    };
    console.log("this is templateVar. map===========>" + templateVars.viewMap);
    // console.log(points)
    res.render("editMap", templateVars);
  });
  // res.render('editMap');
});

//view map for logged in user
router.get("/:mapId/:userId", (req, res) => {
  const mapId = req.params.mapId;
  const userId = req.params.userId;

  Promise.all([
    userQueries.getUsernameById(userId),
    displayPointsQuery.getPoints(mapId),
    displayPointsQuery.getMap(mapId),
  ])
    .then(([username, points = [], viewMap = []]) => {
      const templateVars = {
        user: { id: userId, username: username },
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
router.post("/delete/:mapId", (req, res) => {
  const mapId = req.params.mapId;

  Promise.all([
    userIdFromMapQuery.getUserByMapId(mapId),
    deleteMapQuery.deleteMap(mapId)
  ])
  .then(user => {
    console.log(user[0].user_id + '```````````````````````0202020202')
    res.redirect(`/profile/${user[0].user_id}`);
  })

  // res.redirect("profile");
});

router.post("/favourite/:mapId", (req, res) => {
  console.log(true);
  const mapId = req.params.mapId;
  const shouldBeFavorited = req.body.favourited === "true";

  toggleFavorite
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
