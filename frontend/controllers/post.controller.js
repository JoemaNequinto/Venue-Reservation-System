'use strict';

(() => {
	angular.module('datababes')
		.controller('PostCtrl', PostCtrl);

	function PostCtrl($scope, $filter, PostService) {
		$scope.addVenue = () => {
			const data = {
				Name : $scope.Name,
				Capacity : $scope.Capacity,
				Details : $scope.Details,
				Status : $scope.Status,
				Longitude : $scope.Longitude,
				Latitude : $scope.Latitude
			}
			PostService.addVenue(data);
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
			PostService.addEvent(data);
		}
		$scope.signup = () => {
			const data = {
		        FirstName : $scope.FirstName,
		        MiddleName : $scope.MiddleName,
		        LastName : $scope.LastName,
		        EmailAddress : $scope.EmailAddress,
		        Username : $scope.Username,
		        Password : $scope.Password
		    }
			PostService.signup(data);
		}
	}
})();