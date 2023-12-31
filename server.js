// load .env data into process.env
require("dotenv").config();

// Web server config
const sassMiddleware = require("./lib/sass-middleware");
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const app = express();

app.set("view engine", "ejs");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  "/styles",
  sassMiddleware({
    source: __dirname + "/styles",
    destination: __dirname + "/public/styles",
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static("public"));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require("./routes/users-api");
const widgetApiRoutes = require("./routes/widgets-api");
const usersRoutes = require("./routes/users");
const profileRoutes = require("./routes/profile");
const favesRoutes = require("./routes/faves");
const createRoutes = require("./routes/create");
const mapRoutes = require("./routes/maps");
const homeRoutes = require("./routes/home");
const markerRoutes = require("./routes/marker");

// Resource to view all maps in the homepage
const homepageMapsAPIRoute = require("./routes/viewHomepageMaps-api");
const getUsernameByIdAPIRoute = require("./routes/viewProfileUsernameById-api");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use("/api/users", userApiRoutes);
app.use("/api/widgets", widgetApiRoutes);
app.use("/users", usersRoutes);
app.use("/profile", profileRoutes);
app.use("/faves", favesRoutes);
app.use("/create", createRoutes);
app.use("/maps", mapRoutes);
app.use("/home", homeRoutes);
app.use("/marker", markerRoutes);
// Note: mount other resources here, using the same pattern above

// API end-point for data requests via Ajax
app.use("/api/viewHomepageMaps", homepageMapsAPIRoute);


app.use("/api/viewHomepageMaps/:userId", getUsernameByIdAPIRoute);


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/test", (req, res) => {
  res.send("🤗");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
