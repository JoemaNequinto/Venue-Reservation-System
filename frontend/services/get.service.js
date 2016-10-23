'use strict';

(() => {
	angular.module('datababes')
			.factory('GetService', GetService);

	GetService.$inject = ['$http', '$q'];

	const headers = {
	    'content-type': 'application/x-www-form-urlencoded'
	};

	function GetService($http, $q) {
		const service = {
			getpeople: getpeople,
			getevents: getevents,
			getlocations: getlocations
		}

		return service;

		function getpeople() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/get-people',
				headers: headers
			})
			.then((res) => {
					console.log(res);
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
		function getevents() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/get-events',
				headers: headers
			})
			.then((res) => {
					console.log(res);
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
		function getlocations() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/get-locations',
				headers: headers
			})
			.then((res) => {
					console.log(res);
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
	}
})();