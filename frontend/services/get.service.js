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
			getvenues: getvenues
		}

		return service;

		function getpeople() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/get-people',
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
				url: '/api/get-events',
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
		function getvenues() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/get-venues',
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