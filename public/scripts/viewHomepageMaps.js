/* eslint-disable no-undef */
// <!-- Script to fetch map data and populate the table -->
$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/viewHomepageMaps",
  }).done(function(response) {
    let currentURL = $(location).attr('href'); //"http://localhost:8080/home" "http://localhost:8080/home/1"
    let splitURL = currentURL.split('/'); // ['http:', 'localhost:8080', 'home']  ['http', 'localhost:8080', 'home', '1']
    let lastElement = splitURL[splitURL.length - 1];  // 'home'       '1'
    let newURL = '/'
    if(!isNaN(lastElement[0])){
      newURL += lastElement[0]
    }
   
    const maps = response.maps;
    for (const map of maps) {
      const tableRow = `
        <tr>
          <td>${map.title}</td>
          <td>${map.username}</td>
          <td>
            <form method="GET" action="/maps/${map.id}${newURL}">
              <button type="submit" class="btn btn-outline-danger">Show Map</button>
            </form>
          </td>
        </tr>
      `;

      $("#mapData").append(tableRow);
    }
  });
});
