$(() => {
  //tutorial ---- https://codepen.io/Tomik23/pen/MWKvwzz?editors=1011


  // this is a button that appears when a marker is clicked
  const buttonRemove ='<button type="button" class="remove">delete marker 💔</button>';


  // use the code below if want to use bindPopup for an input box
  // const inputInfo =
  //   `<form class="form-inline" action="/placeholder" method="placeholder">
  // <input class="form-control" type="text" name="placeholder" placeholder="placeholder">
  //   </form>`;


  //create the map
  let map = L.map('map').setView([51.505, -0.09], 13);

  // Add a tile layer (base map)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  map.on('click', function(e) {
    let lat = e.latlng.lat;
    let lon = e.latlng.lng;

    //Add a marker to show where you clicked.
    let theMarker = new L.marker([lat, lon], {draggable: true}).addTo(map).bindPopup(buttonRemove);
  });
})

