'use strict';

(() => {
	angular.module('datababes')
		.controller('GetCtrl', GetCtrl);

	function GetCtrl($scope, GetService) {
		$scope.get = () => {

			// const data = {
			// 	name: $scope.name,
			// 	details: $scope.details
			// }

			// GetService.get(data);
			GetService.get();
		}
	}
})();