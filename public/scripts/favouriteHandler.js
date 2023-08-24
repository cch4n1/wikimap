$(document).ready(function() {
  $(".favorite-icon").on("click", function(event) {
    const icon = $(this);
    const mapId = icon.data("map-id");
    const isFavorited = icon.css("color") === "rgb(255, 0, 0)";

    $.post(
      `/maps/favourite/${mapId}`,
      { favourited: !isFavorited },
      (response) => {
        if (response.success) {
          icon.css("color", isFavorited ? "black" : "red");
        } else {
          console.error("Error updating favorite status.");
        }
      }
    );
  });
});
