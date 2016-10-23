
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

$('.button-collapse').sideNav({
	menuWidth: 300, // Default is 240
	edge: 'left', // Choose the horizontal origin
	closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
});