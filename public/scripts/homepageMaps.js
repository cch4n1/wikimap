/* eslint-disable no-undef */
// <!-- Script to fetch map data and populate the table -->
$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/homepageMaps",
  }).done(function(response) {
    const maps = response.maps;

    for (const map of maps) {
      const tableRow = `
      <tr>
        <td>${map.title}</td>
        <td>${map.username}</td>
        <td>${map.description}</td>
        <td>
          <form method="POST" action="#">
            <button type="submit" class="btn btn-outline-danger">Show Map</button>
          </form>
        </td>
      </tr>
    `;

      $("#mapData").append(tableRow);
    }
  });
});
