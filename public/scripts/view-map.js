$(() => {

  //view the map
  let map = L.map('map').setView([51.505, -0.09], 12);

  // Add a tile layer (base map)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  const latInput = document.querySelector('#markerLat');

  const longInput = document.querySelector('#markerLong');

  map.on('dragend', function(e) {
    let newMapCentre = map.getCenter();
    latInput.value = newMapCentre.lat;
    longInput.value = newMapCentre.lng;
  })


  // debugging code below to see if map is clicked
  // let lat;
  // let lng;

  // map.on('click', function(e) {
  //   console.log(lat + '---' + lng);
  //   console.log('==========> did lat lng print?')
  // });
})

