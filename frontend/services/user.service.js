'use strict';

(() => {
	angular.module('datababes')
			.factory('UserService', UserService);

	UserService.$inject = ['$http', '$q'];

	const headers = {
	    'content-type': 'application/x-www-form-urlencoded'
	};

	function UserService($http, $q) {
		const service = {
			login: login,
			signup: signup,
			logout: logout,
			addEvent: addEvent,
			getpeople: getpeople,
			getevents: getevents,
			getvenues: getvenues
		}

		return service;

		function signup(data) {
			let deferred = $q.defer();

			$http({
				method: 'POST',
				data: $.param(data),
				url: '/api/signup',
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
		function login(data) {
			let deferred = $q.defer();

			$http({
				method: 'POST',
				data: $.param(data),
				url: '/api/login',
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
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
		function getpeople() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/get-people',
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
		function getevents() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/get-events',
				headers: headers
			})
			.then((res) => {
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
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
	}

})();