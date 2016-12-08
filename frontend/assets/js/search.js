$(document).ready(function(){
    setSideNav();
});

function renderVenueMap() {
    var map_container = $("#venue-map")[0];
    var map_attributes = {
        center: new google.maps.LatLng(14.1655209, 121.2396087),
        zoom: 19,
        // mapTypeId: 'satellite'
    }

    map = new google.maps.Map(map_container, map_attributes);
    toggleNavigation();

    $("#mapit").click(function(){
        setMap();
    });
}

function setSideNav(){
    $('.nav-item').removeClass('active-nav');
    $('#side-nav-search').addClass('active-nav');
}

function setMap() {
    var lat = $("#latitude").val();
    var long = $("#longitude").val();
    console.log(lat);
    console.log(long);
    mark(lat, long)
}

var markers = [];

function clearMarkers() {
    markers.forEach(function(item){
        item.setMap(null);
    });
    markers = [];
}

function mark(lat, long) {
    var position = new google.maps.LatLng(lat, long);
    var marker = new google.maps.Marker( {position: position, map: map} );
    clearMarkers();
    markers.push(marker);
    markers[0].setMap(map);
    markers[0].setPosition(position);
    map.panTo(position);
}

function markThis(element) {
    $(".result-item").removeClass("mapped");
    var active = $(element).addClass("mapped");
    var longitude = $(".mapped .longitude").html();
    var latitude = $(".mapped .latitude").html();
    mark(latitude, longitude);
}
