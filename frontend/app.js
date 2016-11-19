'use strict';

(function() {
	angular.module('datababes', ['ngRoute'])
			.config(router);

	function router($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/login.html',
				controller: 'UserCtrl'
			})
			.when('/user/home', {
				templateUrl: 'views/home.html',
				controller: 'UserCtrl'
			})
			.when('/search', {
				templateUrl: 'views/search.html',
				controller: 'UserCtrl'
			})
			.when('/user/events', {
				templateUrl: 'views/user-event.html',
				controller: 'UserCtrl'
			})
			.when('/user/venues', {
				templateUrl: 'views/user-venue.html',
				controller: 'UserCtrl'
			})
			.when('/admin/home', {
				templateUrl: 'views/admin-home.html',
				controller: 'AdminCtrl'
			})
			.when('/admin/events', {
				templateUrl: 'views/admin-event.html',
				controller: 'UserCtrl'
			})
			.when('/admin/venues', {
				templateUrl: 'views/admin-venue.html',
				controller: 'UserCtrl'
			})
			.when('/admin/users', {
				templateUrl: 'views/admin-person.html',
				controller: 'UserCtrl'
			})
			.otherwise({
				redirectTo: '/'
			})
	}
})();
