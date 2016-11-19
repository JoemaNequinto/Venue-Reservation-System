'use strict';

(() => {
	angular.module('datababes')
		.controller('AdminCtrl', AdminCtrl);

	function AdminCtrl($scope, $filter, $location, AdminService) {
		$scope.logout = () => {
			AdminService.logout().then(function(res){
				localStorage.clear();
				$location.url('/');
			}, function(err){
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
			AdminService.addVenue(data);
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
			AdminService.addEvent(data);
		}
	}
})();