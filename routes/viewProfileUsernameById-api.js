const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/getUsernameById");

// router.get("/:userId", (req, res) => {
router.get("/", (req, res) => {
  let userId = req.params.userId;
  //   change this
  userId = 3;
  //   change this
  userQueries
    .getUsernameById(userId)
    .then((username) => {
      console.log(username);
      res.json({ username });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
