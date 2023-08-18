/*
 * All routes for maps are defined here
 * Since this file is loaded in server.js into /faves,
 *   these routes are mounted onto /faves
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

//view map
router.get('/1', (req, res) => {
  res.render('viewMap');
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
