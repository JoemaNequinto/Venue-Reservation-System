'use strict';

(function() {
	angular.module('datababes', ['ngRoute'])
			.config(router);

	function router($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/login.html'
			})
			.when('/dash', {
				templateUrl: 'views/home.html'
			})
			.when('/get', {
				templateUrl: 'views/get.html',
				controller: 'GetCtrl'
			})
			.otherwise({
				redirectTo: '/'
			})	
	}
})();