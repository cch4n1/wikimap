/* eslint-disable no-undef */
// <!-- Script to fetch map data and populate the table -->
$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/viewHomepageMaps",
  }).done(function(response) {
    const maps = response.maps;
    console.log(maps)
    for (const map of maps) {
      console.log(map)
      const tableRow = `
        <tr>
          <td>${map.title}</td>
          <td>${map.username}</td>
          <td>
            <form method="GET" action="/maps/${map.id}">
              <button type="submit" class="btn btn-outline-danger">Show Map</button>
            </form>
          </td>
        </tr>
      `;

      $("#mapData").append(tableRow);
    }
  });
});
