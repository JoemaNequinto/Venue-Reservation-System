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
			addEvent: addEvent,
			getpendingAccounts : getpendingAccounts,
			getpendingEvents: getpendingEvents,
			approveEvent: approveEvent,
			disapproveEvent: disapproveEvent,
			approveAccount: approveAccount,
			disapproveAccount: disapproveAccount,
			getCurrentUserInfo: getCurrentUserInfo,
			getPendingCancellations: getPendingCancellations
		}

		return service;

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
		function getpendingAccounts() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/get-pending-account',
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
		function getpendingEvents() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/get-pending-event',
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
		function getPendingCancellations() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/get-pending-cancellations',
				headers: headers
			})
			.then((res) => {
					deferred.resolve(res);
				}, (err) => {
					deferred.reject(err);
				});

			return deferred.promise;
		}
		function approveEvent(data) {
			let deferred = $q.defer();

			$http({
				method: 'PUT',
				url: '/api/pending-event/'+data,
				headers: headers
			})
			.then((res) => {
				deferred.resolve(res);
			}, (err) => {
				deferred.reject(err);
			});
			return deferred.promise;
		}
		function disapproveEvent(data) {
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
		function approveAccount(data) {
			let deferred = $q.defer();

			$http({
				method: 'PUT',
				url: '/api/pending-account/'+data,
				headers: headers
			})
			.then((res) => {
				deferred.resolve(res);
			}, (err) => {
				deferred.reject(err);
			});
			return deferred.promise;
		}
		function disapproveAccount(data) {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/api/disapprove-account/'+data,
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
