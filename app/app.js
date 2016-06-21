"use strict";

let MediaBay = angular.module('MediaBay', [
	'ngRoute'
]);

MediaBay.config(['$routeProvider', 
  function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'MainController'
		})
		.when('/createproduct', {
			templateUrl: 'partials/newProduct.html',
			controller: 'NewProductController'
		})
		.otherwise('/');
  }
]);