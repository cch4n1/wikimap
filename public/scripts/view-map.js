$(() => {

  //view the map
  let map = L.map('map').setView([51.505, -0.09], 13);

  // Add a tile layer (base map)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  let lat;
  let lng;

  console.log('ran the view-map script');

  map.on('dragend', function(e) {
    console.log('==========> did drag end? YES')
    let newMapCentre = map.getCenter();
    lat = newMapCentre.lat;
    lng= newMapCentre.lng;

    console.log(`lat is: ${lat} '------' long is: ${lng}`);
  })


  map.on('click', function(e) {
    console.log(lat + '---' + lng);
    console.log('==========> did lat lng print?')
  });
})
