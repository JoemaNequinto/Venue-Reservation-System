'use strict';

(function() {
	angular.module('datababes', ['ngRoute'])
			.config(router);

	function router($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/login.html'
			})
			.when('/home', {
				templateUrl: 'views/home.html'
			})
			.when('/search', {
				templateUrl: 'views/search.html'
			})
			.when('/get-people', {
				templateUrl: 'views/get-person.html',
				controller: 'GetCtrl'
			})
			.when('/get-events', {
				templateUrl: 'views/get-event.html',
				controller: 'GetCtrl'
			})
			.when('/get-locations', {
				templateUrl: 'views/get-location.html',
				controller: 'GetCtrl'
			})
			.otherwise({
				redirectTo: '/'
			})
	}
})();
