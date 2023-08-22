$(document).ready(function () {
  const userId = 3; // Hardcoded user ID
  $.ajax({
    url: `/api/viewHomepageMaps/${userId}`, // use the hardcoded userId in the URL
    type: "GET",
    dataType: "json",
    success: function (data) {
      $("#username").text(data.username);
    },
    error: function (error) {
      console.error("Error fetching user data:", error);
    },
  });
});
