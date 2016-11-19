// $('.button-collapse').sideNav({
// 	menuWidth: 300, // Default is 240
// 	edge: 'left', // Choose the horizontal origin
// 	closeOnClick: false // Closes side-nav on <a> clicks, useful for Angular/Meteor
// });

function toggleNavigation() {

	var total_width = $("#main-wrapper").width();
	var reference_width = $("#sidebar-wrapper").width();

	if(reference_width/total_width >= 0.14) {
		$("#sidebar-wrapper").width("5%");
		$("#content-wrapper").width("95%");
	}

	else {
		$("#sidebar-wrapper").width("15%");
		$("#content-wrapper").width("85%");
	}

	$("#profile").toggle();
	$("#site-title").toggle();
	$(".nav-item-text").toggle();
}

$(document).ready(function(){

	$("#nav-toggle").click(function(){
		toggleNavigation();
	});

});
