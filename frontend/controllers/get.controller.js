'use strict';

(() => {
	angular.module('datababes')
		.controller('GetCtrl', GetCtrl);

	function GetCtrl($scope, GetService) {
		$scope.people = [];
		$scope.events = [];
		$scope.venues = [];

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
		$scope.getvenues = () => {
			GetService.getvenues()
				.then((data) => {
					$scope.venues = data.data;
					console.log($scope.locations);
				}, (err) => {
					throw new Error(err);
				});
		}
	}
})();