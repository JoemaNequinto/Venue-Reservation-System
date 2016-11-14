$('.slider').slider({
	full_width: true,
	indicators: false,
	transition: 1000,
	interval: 2000
});


function login() {
	const username = $('input#username').val();
	const password = $('input#password').val();


	if (!username) {
		return utility.errorHandler("Username is required.");
	} else if (!password) {
		return utility.errorHandler("Password is required.");//shows the message
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
					return utility.errorHandler("Error in Login. Please try again !");
					location.reload();
				}
				//stores data to localStorage
				localStorage.user = data;
				document.cookie = username;
				window.location.href = "#/home"; //goes to a different page
				// location.reload();
			},
			error: function (error) {
				if (error.status == 404) {
					return utility.errorHandler(error.responseJSON.message);
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
				return utility.errorHandler("Error in Logout. Please try again !");
				location.reload();
			}
			localStorage.clear();
			window.location.href = "/"; //goes to a different page
		},
		error: function (error) {
			return utility.errorHandler("Something went wrong!");
		}
	});
}

// const profile_name = localStorage.user.username;
$('#profile-name').html(document.cookie);
$(document).ready(function(){
	// $("#sidebar-wrapper").addClass("hidden");
	$('#profile-name').html(document.cookie);
});
