$('.slider').slider({
	full_width: true,
	indicators: false,
	transition: 1000,
	interval: 2000
});

$(document).ready(function(){
	// $("#sidebar-wrapper").hide();
	$("#sidebar-wrapper").addClass("hidden");
});

function login() {
	const username = $('input#username').val();
	const password = $('input#password').val();


	if (!username) {
		Materialize.toast("Username is required.", 2000);//shows the message
	} else if (!password) {
		Materialize.toast("Password is required.", 2000);//shows the message
	} else {
		log_in();
	}

	//ajax call to get user credentials
	function log_in() {
		$.ajax({
			method: 'POST',
			url: '/api/login',
			data: {
				username: username,
				password: password
			},
			success: function (data) {
				if (!data || !data.role) {
					return Materialize.toast("Error in Login. Please try again !", 2500);
					location.reload();
				}
				//stores data to localStorage
				localStorage.user = data;
				document.cookie = data.username;
				window.location.href = "#/home"; //goes to a different page
			},
			error: function (error) {
				if (error.status == 404) {
					Materialize.toast(error.responseJSON.message, 2000);//shows the message
				}
			}
		});
	}
}

function logout() {
	//ajax call to get user credentials
	$.ajax({
		method: 'GET',
		url: '/api/logout',
		success: function (data) {
			//stores data to localStorage
			if (!data) {
				return Materialize.toast("Error in Logout. Please try again !", 2500);
				location.reload();
			}
			localStorage.clear()
			window.location.href = "/"; //goes to a different page
		},
		error: function (error) {
			return Materialize.toast("Something went wrong!", 2500);
		}
	});
}
