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
			getvenues: getvenues,
			editEvent: editEvent,
			deleteEvent: deleteEvent,
			editVenue: editVenue,
			deleteVenue: deleteVenue,
			getCurrentUserInfo: getCurrentUserInfo,
			getReservation: getReservation
		}

		return service;

		function getReservation(data) {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/getPendingRequestOfUser/'+data,
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}

		function getCurrentUserInfo() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/checkSession',
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}

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
		function editEvent(data, id) {
			let deferred = $q.defer();

			$http({
				method: 'PUT',
				data: $.param(data),
				url: '/api/event/'+id,
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
		function editVenue(data, id) {
			let deferred = $q.defer();

			$http({
				method: 'PUT',
				data: $.param(data),
				url: '/api/venue/'+id,
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
		function deleteEvent(data) {
			let deferred = $q.defer();

			$http({
				method: 'DELETE',
				url: '/api/event/'+data,
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
		function deleteVenue(data) {
			let deferred = $q.defer();

			$http({
				method: 'DELETE',
				url: '/api/venue/'+data,
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