$(() => {

  //view the map
  let map = L.map('map').setView([51.505, -0.09], 13);

  // Add a tile layer (base map)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  // comment out the 2 lets below, useless
  let mapCentreLat;
  let mapCentreLong;

  const latInput = document.querySelector('#markerLat');

  const longInput = document.querySelector('#markerLong');

  console.log('ran the view-map script');

  map.on('dragend', function(e) {
    console.log('==========> did drag end? YES')
    let newMapCentre = map.getCenter();

    latInput.value = newMapCentre.lat;
    longInput.value = newMapCentre.lng;
    //console.log(`this  is the centre at --- lat is: ${lat} '------' long is: ${lng}`);
  })

  // map onlick is useless, please remove
  // map.on('click', function(e) {

  //   let marker = new L.marker(e.latlng, { draggable: true });

  //   latInput.value = mapCentreLat;
  //   longInput.value = mapCentreLong;

  //   const markerPlace = document.querySelector('.marker-position');
  //   markerPlace.textContent = `Yes sir create position: ${marker.getLatLng().lat}, ${marker.getLatLng().lng
  //     }`;

  //   //console.log('the current clicked point is' + lat + '---' + lng);
  //   console.log('==========> did lat lng print?')
  // });
})

