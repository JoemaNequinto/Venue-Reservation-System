'use strict';

(() => {
	angular.module('datababes')
	.controller('UserCtrl', UserCtrl);

	function UserCtrl($scope, $filter, $location, UserService) {

		$scope.events = [];
		$scope.venues = [];
		$scope.people = [];
		$scope.reservation = [];
		$scope.mapResult = [];
		$scope.searchmaptext;

		$scope.userid;

		let eventid;
		let venueid;
		let userid;

		($scope.getCurrentUserInfo = () => {
			UserService.getCurrentUserInfo()
			.then((data) => {
				userid = data.data.id;
				$scope.userid = data.data.id;
				$scope.userinfo = data.data;
				$scope.updateProfile();
				$scope.getReservation(data.data.id);
				$scope.getvenues();
				console.log(data);
			}, (err) => {
				throw new Error(err);
			});
		})();

		$scope.getpeople = () => {
			UserService.getpeople()
			.then((data) => {
				$scope.people = data.data;
			}, (err) => {
				throw new Error(err);
			});
		}

		$scope.getReservation = (userid) => {
			UserService.getReservation(userid)
			.then((data) => {
				$scope.reservation = data.data;
			}, (err) => {
				throw new Error(err);
			});
		}


		$scope.signup = () => {
			if (!$scope.FirstName) {
				return utility.errorHandler("First name is required!");
			} else if (!$scope.MiddleName) {
				return utility.errorHandler("Middle name is required!");
			} else if (!$scope.LastName) {
				return utility.errorHandler("Last name is required!");
			} else if (!$scope.EmailAddress) {
				return utility.errorHandler("Email address is required!");
			} else if (!$scope.Username) {
				return utility.errorHandler("Username is required!");
			} else if (!$scope.Password) {
				return utility.errorHandler("Password is required!");
			}
			const data = {
				FirstName : $scope.FirstName,
				MiddleName : $scope.MiddleName,
				LastName : $scope.LastName,
				EmailAddress : $scope.EmailAddress,
				Username : $scope.Username,
				Password : $scope.Password
			}
			UserService.signup(data)
			.then((res) => {
				return Materialize.toast("Pending account! Wait for admin's confirmation", 3000, '', function(){location.reload();});
			}, (err) => {
				throw new Error(err);
			});
		}

		$scope.login = () => {
			if (!$scope.username) {
				return utility.errorHandler("Username is required!");
			} else if (!$scope.password) {
				return utility.errorHandler("Password is required!");
			}
			const data = {
				username : $scope.username,
				password : $scope.password
			}
			UserService.login(data)
			.then((res) => {
				localStorage.user = {
					username : res.data.Username,
					firstname : res.data.FirstName,
					middlename : res.data.MiddleName,
					lastname : res.data.LastName
				};

				document.getElementById("loginbutton").style.display = "none";
				document.getElementById("preloader").style.display = "block";

				if (res.data.role == "ADMIN") {
					setTimeout(function(){
						window.location.href='/#/admin/home';
					}, 1500);
				} else if (res.data.role == "USER") {
					setTimeout(function(){
						window.location.href='/#/user/home';
					}, 1500);
				}

			}, (err) => {
				if (err.status == 404) {
					Materialize.toast(err.data.message,1000,'',function(){location.reload();});
				}
			});
		}

		$scope.logout = () => {
			UserService.logout()
			.then((res) => {
				localStorage.clear();
				$location.url('/');
			}, (err) => {
				return utility.errorHandler("Something went wrong!");
			});
		}

		$scope.addEvent = () => {
			const date = $filter('date')($scope.EventDate, "yyyy-MM-dd");
			const starttime = $filter('date')($scope.EventStartTime, "h:mm a");
			const endtime = $filter('date')($scope.EventEndTime, "h:mm a");
			const data = {
				EventName : $scope.EventName,
				EventDetails : $scope.EventDetails,
				EventDate : date,
				EventStartTime : starttime,
				EventEndTime : endtime,
			}
			UserService.addEvent(data, $scope.userid)
			.then((data) => {
				return Materialize.toast("Add Event Successful! Wait for admin's confirmation", 3000, '', function(){location.reload();});
			}, (err) => {
				throw new Error(err);
			});

		}

		$scope.getevents = () => {
			UserService.getevents()
			.then((data) => {
				$scope.events = data.data;
			}, (err) => {
				throw new Error(err);
			});
		}

		$scope.updateEventModal = (id, name, details, eventdate, starttime, endtime) => {
			const date = $filter('date')(eventdate, "yyyy-MM-dd");
			const time1 = $filter('date')(starttime, "shortTime");
			const time2 = $filter('date')(endtime, "shortTime");

			eventid = id;

			$('input#event-name').val(name);
			$('input#event-details').val(details);
			$('input#event-date').val(date);
			$('input#start-time').val(time1);
			$('input#end-time').val(time2);
			$('.labelText').addClass('active');
		}

		$scope.updateVenueModal = (id, name, capacity, details, status, longitude, latitude) => {

			venueid = id;

			if (status === $('#a_option').text()) {
				$('#status').val($('#a_option').val());
			} else if (status === $('#d_option').text()) {
				$('#status').val($('#d_option').val());
			} else if (status === $('#r_option').text()) {
				$('#status').val($('#r_option').val());
			}
			$(document).ready(function () {
				$('select').material_select();
			});
			$('input#venue-name').val(name);
			$('input#venue-capacity').val(capacity);
			$('input#details').val(details);
			$('input#longitude').val(longitude);
			$('input#latitude').val(latitude);
			$('.labelText').addClass('active');
		}
		$scope.updateProfile = () => {
			const data = {
				firstname: $scope.userinfo.firstname,
				middlename: $scope.userinfo.middlename,
				lastname: $scope.userinfo.lastname,
				username: $scope.userinfo.username,
				email: $scope.userinfo.email,
				password: $scope.userinfo.password
			};
			$('#first_name').val(data.firstname);
			$('#middle_name').val(data.middlename);
			$('#last_name').val(data.lastname);
			$('#user_name').val(data.username);
			$('#email').val(data.email);
			$('#password1').val(data.password);
		}
		$scope.editProfile = () => {
			if (!$scope.first_name) {
				return utility.errorHandler("First name is required!");
			} else if (!$scope.middle_name) {
				return utility.errorHandler("Middle name is required!");
			} else if (!$scope.last_name) {
				return utility.errorHandler("Last name is required!");
			} else if (!$scope.email) {
				return utility.errorHandler("Email address is required!");
			} else if (!$scope.password1) {
				return utility.errorHandler("Password is required!");
			} else if (!$scope.password2) {
				return utility.errorHandler("Password is required!");
			}
			if($scope.password1 != $scope.password2){
				return utility.errorHandler("Password do not match!");
			} else {
				const password = $scope.password1;
				const data = {
					FirstName: $scope.first_name,
					MiddleName: $scope.middle_name,
					LastName: $scope.last_name,
					EmailAddress: $scope.email,
					Password: password
				};
				UserService.editProfile(data, userid)
				.then((data) => {
					return Materialize.toast("Profile Updated.", 2000, '', function(){window.location.href="/#/user/home";});
				}, (err) => {
					throw new Error(err);
				});
			}
		}
		$scope.editEvent = () => {
			const date = $filter('date')($scope.EventDate2, "yyyy-MM-dd");
			const starttime = $filter('date')($scope.EventStartTime2, "h:mm a");
			const endtime = $filter('date')($scope.EventEndTime2, "h:mm a");
			const data = {
				EventName : $scope.EventName2,
				EventDetails : $scope.EventDetails2,
				EventDate : date,
				EventStartTime : starttime,
				EventEndTime : endtime
			};
			UserService.editEvent(data, eventid)
			.then((data) => {
				return Materialize.toast("Event Updated.", 2000, '', function(){$scope.getevents();});
			}, (err) => {
				throw new Error(err);
			});
		}

		$scope.editVenue = () => {
			const data = {
				Name : $scope.Name,
				Capacity : $scope.Capacity,
				Details : $scope.Details,
				Status : $scope.Status,
				Longitude : $scope.Longitude,
				Latitude : $scope.Latitude
			};
			UserService.editVenue(data, venueid)
			.then((data) => {
				return Materialize.toast("Venue Updated.", 2000, '', function(){$scope.getvenues();});
			}, (err) => {
				throw new Error(err);
			});
		}

		$scope.deleteEvent = (data) => {
			UserService.deleteEvent(data)
			.then((data) => {
				return Materialize.toast("Event Deleted.", 2000, '', function(){$scope.getevents();});
			}, (err) => {
				throw new Error(err);
			});
		}

		$scope.deleteVenue = (data) => {
			UserService.deleteVenue(data)
			.then((data) => {
				return Materialize.toast("Venue Deleted.", 2000, '', function(){$scope.getvenues();});
			}, (err) => {
				throw new Error(err);
			});
		}

		$scope.getvenues = () => {
			UserService.getvenues()
			.then((data) => {
				$scope.venues = data.data;
			}, (err) => {
				throw new Error(err);
			});
		}

		$scope.searchMap = () => {
			// console.log($scope.searchmaptext);
			UserService.searchMap($scope.searchmaptext)
			.then((data) => {
				$scope.mapResult = data.data;
				// console.log($scope.mapResult);
			}, (err) => {
				throw new Error(err);
			});
		}

		$scope.cancelRequest = (eventid) => {
			UserService.cancelRequest(eventid)
			.then((data) => {
				console.log(data);
				// $scope.mapResult = data.data;
			}, (err) => {
				throw new Error(err);
			});
		}
	}
})();
