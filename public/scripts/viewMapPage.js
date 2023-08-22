/* eslint-disable no-undef */
// <!-- Script to fetch map data and populate the table -->
$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "/api/viewMapPage",
  }).done(function(response) {
    const points = response.points;

    for (const point of points) {
      const tableRow = `
        <tr>
          <td>${point.title}</td>
          <td>${point.description}</td>
          <td>
            <form method="POST" action="#">
              <button type="submit" class="btn btn-outline-danger">Show Map</button>
            </form>
          </td>
        </tr>
      `;

      $("#pointsData").append(tableRow);
    }
  });
});
