"use strict";

let MediaBay = angular.module('MediaBay', [
	'ngRoute'
]);

MediaBay.config(['$routeProvider', 
  function ($routeProvider) {
	$routeProvider
		// .when('/', {
		// 	templateUrl: 'partials/main.html',
		// 	controller: 'MainController'
		// })
		.when('/', {
			templateUrl: 'partials/product.html',
			controller: 'NewProductController'
		})
		.when('/product/add', {
			templateUrl: 'partials/newProduct.html',
			controller: 'NewProductController'
		})
		.when('/product/edit', {
			templateUrl: 'partials/editProduct.html',
			controller: 'NewProductController'
		})
		.when('/product/detail', {
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
		.when('/groups', {
			templateUrl: 'partials/groups.html',
			controller: 'GroupController'
		})
		.when('/group/add', {
			templateUrl: 'partials/addGroup.html',
			controller: 'GroupController'
		})
		.when('/group/edit', {
			templateUrl: 'partials/editGroup.html',
			controller: 'GroupController'
		})
		.when('/group/detail', {
			templateUrl: 'partials/groupDetail.html',
			controller: 'GroupController'
		})
		.otherwise('/');
  }
]);