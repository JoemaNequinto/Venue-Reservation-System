'use strict';

(() => {
	angular.module('datababes')
		.controller('GetCtrl', GetCtrl);

	function GetCtrl($scope, GetService) {
		$scope.people = [];
		$scope.events = [];
		$scope.locations = [];

		$scope.getpeople = () => {
			GetService.getpeople()
				.then((data) => {
					$scope.people = data.data;
					console.log($scope.people);
				}, (err) => {
					throw new Error(err);
				});
		}
		$scope.getevents = () => {
			GetService.getevents()
				.then((data) => {
					$scope.events = data.data;
					console.log($scope.events);
				}, (err) => {
					throw new Error(err);
				});
		}
		$scope.getlocations = () => {
			GetService.getlocations()
				.then((data) => {
					$scope.locations = data.data;
					console.log($scope.locations);
				}, (err) => {
					throw new Error(err);
				});
		}
	}
})();