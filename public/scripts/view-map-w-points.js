$(() => {

  //view the map
  let map = L.map('map').setView([viewMap[0].latitude, viewMap[0].longtitude], 12);
  // Add a tile layer (base map)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  let lat;
  let lng;

  let centre = map.getCenter();

  for (let point of points) {
    L.marker([point.latitude, point.longitude]).addTo(map)
      .bindPopup(`<strong>${point.title}</strong><br>${point.description}<br><br><center><img src="${point.image}" width="120" height="120"></center>`)
  }

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

