'use strict';

(function() {
	angular.module('datababes', ['ngRoute'])
			.config(router);

	function router($routeProvider) {
		$routeProvider
			.when('/get', {
				templateUrl: 'views/get.html',
				controller: 'GetCtrl'
			})
			.otherwise({
				redirectTo: '/'
			})	
	}
})();