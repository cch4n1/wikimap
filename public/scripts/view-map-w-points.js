$(() => {

  //view the map
  let map = L.map('map').setView([viewMap[0].latitude, viewMap[0].longtitude], 12);
  // Add a tile layer (base map)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  let centre = map.getCenter();

  for (let point of points) {
    L.marker([point.latitude, point.longitude]).addTo(map)
      .bindPopup(`<strong>${point.title}</strong><br>${point.description}<br><br><center><img src="${point.image}" width="120" height="120"></center>`)
  }

  // debugging code below to see if map is clicked
  // let lat;
  // let lng;

  // map.on('click', function(e) {
  //   console.log(lat + '---' + lng);
  //   console.log('==========> did lat lng print?')
  // });
})

