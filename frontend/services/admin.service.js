'use strict';

(() => {
	angular.module('datababes')
			.factory('AdminService', AdminService);

	AdminService.$inject = ['$http', '$q'];

	const headers = {
	    'content-type': 'application/x-www-form-urlencoded'
	};

	function AdminService($http, $q) {
		const service = {
			logout: logout,
			addVenue: addVenue,
			addEvent: addEvent
		}

		return service;

		function logout() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/logout',
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
		function addVenue(data) {
			let deferred = $q.defer();

			$http({
				method: 'POST',
				data: $.param(data),
				url: '/api/addVenue',
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
		function addEvent(data) {
			let deferred = $q.defer();

			$http({
				method: 'POST',
				data: $.param(data),
				url: '/api/addEvent',
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
	}

})();