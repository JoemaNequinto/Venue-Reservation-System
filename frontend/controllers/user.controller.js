'use strict';

(() => {
	angular.module('datababes')
		.controller('UserCtrl', UserCtrl);

	function UserCtrl($scope, $filter, $location, UserService) {

		$scope.events = [];
		$scope.venues = [];
		$scope.people = [];

		$scope.getpeople = () => {
			UserService.getpeople()
				.then((data) => {
					$scope.people = data.data;
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
					if (res.data.role == "ADMIN") {
						$location.url('/admin/home');
					} else if (res.data.role == "USER") {
						$location.url('/user/home');
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
				EventEndTime : endtime
			}
			UserService.addEvent(data)
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
		$scope.getvenues = () => {
			UserService.getvenues()
				.then((data) => {
					$scope.venues = data.data;
				}, (err) => {
					throw new Error(err);
				});
		}
	}
})();