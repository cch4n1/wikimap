// const express = require("express");
// const router = express.Router();
// const userQueries = require("../db/queries/getUsernameById");

// router.get("/", (req, res) => {
//   let userId = req.params.userId;
//   //   change this
//   userId = 3;
//   //   change this
//   userQueries
//     .getUsernameById(userId)
//     .then((username) => {
//       console.log(username);
//       res.json({ username });
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err.message });
//     });
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const userQueries = require("../db/queries/getUsernameById");

// router.get("/:userId", (req, res) => {

// http://localhost:8080/profile/1

router.get("/:userId", (req, res) => {
  const userId = req.params.userId;

  userQueries
    .getUsernameById(userId)
    .then((username) => {
      if (username) {
        // Render the profile view with the username
        res.render("profile", { user: { id: userId, username: username } });
      } else {
        // Handle case when username is not found for the given userId
        res.status(404).send("Username not found for the given User ID");
      }
    })
    .catch((err) => {
      console.error(`Error: ${err}`);
      res.status(500).send("Server Error");
    });
});

module.exports = router;
