'use strict';

(() => {
	angular.module('datababes')
		.controller('AdminCtrl', AdminCtrl);

	function AdminCtrl($scope, $filter, $location, AdminService) {
		
		$scope.pendingAccounts = [];
		$scope.pendingEvents = [];
		
		$scope.logout = () => {
			AdminService.logout()
				.then((res) => {
					localStorage.clear();
					$location.url('/');
				}, (err) => {
					return utility.errorHandler("Something went wrong!");
				});
		}
		$scope.addVenue = () => {
			const data = {
				Name : $scope.Name,
				Capacity : $scope.Capacity,
				Details : $scope.Details,
				Status : $scope.Status,
				Longitude : $scope.Longitude,
				Latitude : $scope.Latitude
			}
			AdminService.addVenue(data)
				.then((data) => {
					return Materialize.toast("Venue Added.",2000,'',function(){window.location.reload();});
				}, (err) => {
					throw new Error(err);
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
			AdminService.addEvent(data)
				.then((data) => {
					return Materialize.toast("Event Added.",2000,'',function(){window.location.reload();});
				}, (err) => {
					throw new Error(err);
				});
		}
		$scope.getpendingAccounts = () => {
			AdminService.getpendingAccounts()
				.then((data) => {
					$scope.pendingAccounts = data.data;
				}, (err) => {
					throw new Error(err);
				});
		}
		$scope.getpendingEvents = () => {
			AdminService.getpendingEvents()
				.then((data) => {
					$scope.pendingEvents = data.data;
				}, (err) => {
					throw new Error(err);
				});
		}
		$scope.approveEvent = (data) => {
			AdminService.approveEvent(data)
				.then((data) => {
					return Materialize.toast("Event Approved!", 2000, '', function(){window.location.reload();});
				}, (err) => {
					throw new Error(err);
				});
		}
		$scope.disapproveEvent = (data) => {
			AdminService.disapproveEvent(data)
				.then((data) => {
					return Materialize.toast("Event Deleted!", 2000, '', function(){window.location.reload();});
				}, (err) => {
					throw new Error(err);
				});
		}
		$scope.approveAccount = (data) => {
			AdminService.approveAccount(data)
				.then((data) => {
					return Materialize.toast("Account Approved!", 2000, '', function(){window.location.reload();});
				}, (err) => {
					throw new Error(err);
				});
		}
		$scope.disapproveAccount = (data) => {
			AdminService.disapproveAccount(data)
				.then((data) => {
					return Materialize.toast("Account Deleted!", 2000, '', function(){window.location.reload();});
				}, (err) => {
					throw new Error(err);
				});
		}
	}
})();