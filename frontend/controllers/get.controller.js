'use strict';

(() => {
	angular.module('datababes')
		.controller('GetCtrl', GetCtrl);

	function GetCtrl($scope, GetService) {
		$scope.people = [];

		$scope.get = () => {
			GetService.get()
				.then((data) => {
					$scope.people = data.data;
					console.log($scope.people);
				}, (err) => {
					throw new Error(err);
				});
		}
	}
})();