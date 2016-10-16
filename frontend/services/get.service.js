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
			get: get
		}

		return service;

		function get() {
			let deferred = $q.defer();

			$http({
				method: 'GET',
				url: '/get',
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