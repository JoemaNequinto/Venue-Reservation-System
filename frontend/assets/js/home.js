$(document).ready(function(){
  setSideNav();
});

function renderVenueMap() {
  var map_container = $("#venue-map")[0];
  var map_attributes = {
     center: new google.maps.LatLng(14.1655209, 121.2396087),
     zoom: 15
//     mapTypeId: 'satellite'
   }

  var map = new google.maps.Map(map_container, map_attributes);
  console.log(map);
}

function setSideNav(){
  $("#side-nav-home").removeClass("active-nav");
  $("#side-nav-search").addClass("active-nav");
}
