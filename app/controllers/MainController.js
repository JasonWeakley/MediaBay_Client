"use strict";

MediaBay.controller('MainController', [
	'$http', 
	'$scope',

	function ($http, $scope) {
		console.log("MainController is working");

		$scope.products = {};

		// What is happening with "$scope.'something'"? 
		// Is it assigning value of scope to the thing after the dot?
		// I would expect "$scope = products" if that were the case.

		$http
			.get('http://localhost:5000/api/Product')
			.success(p => $scope.products = p);
			/// These do not work, but keeping here for learning purposes:
			// .success(p => $scope.$parent.products = p);
			// .success(p => $scope.$parent.p[0]);
			// .then(console.log($scope.products));

	}

]);