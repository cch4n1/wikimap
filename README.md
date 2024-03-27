=======
WikiMap 🌎
=========

A webapp for users to maintain a collection of customized maps with saved location points and details for each map. 

## Purpose

This project was built for our midterm project at Lighthouse Labs

## Final Product

**Map Display Page**
![](/pictures/map.png)

**Home Page**
![](/pictures/home.png)

**Create a New Map**
![](/pictures/create.png)

**Edit an Existing Map**
![](/pictures/edit-1.png)
![](/pictures/edit-2.png)

**My Maps**
![](/pictures/my-maps.png)

**Favourites**
![](/pictures/favs.png)

## Features

**Map Display Page**
- Each Map Page displays a list of points (locations) saved to the map
- Each point has a name, description, an image (url) and its co-ordinates are saved to the map display

**Home Page**
- Shows a list of maps created by different users

**Create a New Map**
- Create a new map from scratch, set the display co-ordinates for this new map.
- Edit the map after creating to start adding save points to the map.

**Edit an Existing Map**
- Edit any map saved to your profile
- Add a new save point (location) to a map
- Delete any of the saved points
- Edit any of the saved points on a map, including: name, description, image and co-ordinates.

**My Maps**
- Manage a collection of your maps
- Edit, delete, or save to favourites

**Favourites**
- Keep a collection of your favourite maps

## Getting Started

1. Open project folder `cd wikimap`
3. Install dependencies with `npm install`
4. Run the server: `npm run local`
  - Note: nodemon is used, so you should not have to restart your server
5. Visit `http://localhost:8080/`

## Dependencies

- Express
- Morgan
- Ejs
- Node 10.x or above
- NPM 5.x or above
- PG 6.x
