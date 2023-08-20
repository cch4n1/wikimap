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
  let centre = map.getCenter();
  console.log(`===============> ${Object.keys(centre)}`);
  // console.log(`===============> ${centre._southWest}`);
  // console.log(`===============> ${centre._northEast}`);


  // map.on('mousemove', function(e) {
  //   // lat = centre.lat;
  //   // lng = centre.lng;
  //   console.log('==========> did mouse move?')
  //   console.log([e.latlng.lat, e.latlng.lng]);
  //   // console.log(map.getCenter());
  // })


  map.on('click', function(e) {
    console.log(lat + '---' + lng);
    console.log('==========> did lat lng print?')
  });
})

