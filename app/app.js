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
		.when('/editproduct', {
			templateUrl: 'partials/editProduct.html',
			controller: 'NewProductController'
		})
		.when('/productdetails', {
			templateUrl: 'partials/productDetails.html',
			controller: 'NewProductController'
		})
		.when('/series', {
			templateUrl: 'partials/series.html',
			controller: 'SeriesController'
		})
		.when('/series/add', {
			templateUrl: 'partials/addSeries.html',
			controller: 'SeriesController'
		})
		.when('/series/edit', {
			templateUrl: 'partials/editSeries.html',
			controller: 'SeriesController'
		})
		.when('/series/detail', {
			templateUrl: 'partials/seriesDetail.html',
			controller: 'SeriesController'
		})
		.otherwise('/');
  }
]);