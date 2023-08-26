// Initialize the map
let map = L.map("map").setView([51.505, -0.09], 12);

// Add a tile layer (base map)
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

// Add a marker to the map
L.marker([51.5, -0.09]).addTo(map).bindPopup("A marker here!").openPopup();
