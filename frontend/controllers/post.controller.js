'use strict';

(() => {
	angular.module('datababes')
		.controller('AddVenueCtrl', AddVenueCtrl);

	function AddVenueCtrl($scope, PostService) {
		$scope.addVenue = () => {
			const data = {
				LocationName : $scope.locationname,
				Capacity : $scope.locationcapacity,
				LocationDetails : $scope.locationdetails
			}
			PostService.postTodo(data);
		}
	}
})();