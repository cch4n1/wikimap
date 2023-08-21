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

  map.on('click', addMarker);

  function addMarker(e) {
    let marker = new L.marker(e.latlng, {draggable: true}).addTo(map).bindPopup(buttonRemove);

    //event remove marker
    marker.on('popupopen', removeMarker);

    //event dragged marker
    marker.on('dragend', dragedMarker);
  }

  // remove marker
  function removeMarker() {
    const marker = this;
    const btn = document.querySelector('.remove');
    btn.addEventListener('click', function () {
      map.removeLayer(marker);
    })
  }


  // drag marker
  function dragedMarker() {
    const markerPlace = document.querySelector('.marker-position');
    markerPlace.textContent = `change position: ${this.getLatLng().lat}, ${
      this.getLatLng().lng
    }`;

  }
  map.on('click', function(e) {
    let lat = e.latlng.lat;
    let lon = e.latlng.lng;

    //Add a marker to show where you clicked.
    let theMarker = new L.marker([lat, lon], {draggable: true}).addTo(map).bindPopup(buttonRemove);
  });
})

