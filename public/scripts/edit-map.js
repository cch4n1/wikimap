$(() => {
  //tutorial ---- https://codepen.io/Tomik23/pen/MWKvwzz?editors=1011


  // this is a button that appears when a marker is clicked
  const buttonRemove = '<button type="button" class="remove">delete marker 💔</button>';


  // use the code below if want to use bindPopup for an input box
  // const inputInfo =
  //   `<form class="form-inline" action="/placeholder" method="placeholder">
  // <input class="form-control" type="text" name="placeholder" placeholder="placeholder">
  //   </form>`;


  //create the map
  let map = L.map('map').setView([51.505, -0.09], 12);

  // Add a tile layer (base map)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // populateMarker function
  function populateMarker(pointsObject) {
    for (let point of points) {
      marker = L.marker([point.latitude, point.longitude], { draggable: false }).addTo(map)
      .bindPopup(`<strong>${point.title}</strong><br>${point.description}`)
    }
  }
  populateMarker(points);

  // straight loop
  // for (let point of points) {
  //   L.marker([point.latitude, point.longitude], { draggable: true }).addTo(map)
  //     .bindPopup(`<strong>${point.title}</strong><br>${point.description}`);
  // }

  const latInput = document.querySelector('#markerLat');

  const longInput = document.querySelector('#markerLong');

  map.on('click', addMarker);

  function addMarker(e) {
    let marker = new L.marker(e.latlng, { draggable: true }).addTo(map).bindPopup(buttonRemove);
    console.log(marker);
    // //prepare data for POST request
    // const data = {
    //   lat: e.latlng.lat,
    //   lng: e.latlng.lng
    // };

    //event remove marker
    marker.on('popupopen', removeMarker);

    //event dragged marker
    marker.on('dragend', dragedMarker);

    latInput.value = e.latlng.lat;
    longInput.value = e.latlng.lng;

    const markerPlace = document.querySelector('.marker-position');
    markerPlace.textContent = `Yes sir create position: ${marker.getLatLng().lat}, ${marker.getLatLng().lng
      }`;

    // Send an AJAX POST request using jQuery

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

      // code below is current not used

    // $.ajax({
    //   type: "POST",
    //   url: "/maps/edit/1",
    //   data: data,
    //   // contentType: "application/json",
    //   dataType: "json", // Change this dataType as needed
    //   success: function(response) {
    //     // Handle the successful response here
    //     console.log("AJAX request successful:", response);
    //   },
    //   error: function(error) {
    //     // Handle any errors that occur during the request
    //     console.error("AJAX request error:", error);
    //   }
    // });

    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  }

  // remove marker
  function removeMarker() {
    const marker = this;
    const btn = document.querySelector('.remove');
    btn.addEventListener('click', function() {
      map.removeLayer(marker);
    });
  }


  // drag marker
  function dragedMarker() {
    const markerPlace = document.querySelector('.marker-position');
    markerPlace.textContent = `change position: ${this.getLatLng().lat}, ${this.getLatLng().lng}`;
    console.log('hello nurse')
    latInput.value = this.getLatLng().lat;
    longInput.value = this.getLatLng().lng;
  }

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  // map.on('click', function(e) {
  //   let lat = e.latlng.lat;
  //   let lon = e.latlng.lng;

  //   //Add a marker to show where you clicked.
  //   let theMarker = new L.marker([lat, lon], {draggable: true}).addTo(map).bindPopup(buttonRemove);
  // });
});
