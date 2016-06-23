"use strict";

MediaBay.controller('NewProductController', [
	'$http',
	'$scope',
	'$location',

	function ($http, $scope, $location) {

		$scope.product = [];
		$scope.groupList = [];

		// Get products and scope the data equal to the var "prod"
		$http
			.get(`http://localhost:5000/api/Product`)
			.success(prod => $scope.product = prod);

		$http({
            method: 'GET',
            url: `http://localhost:5000/api/Group`
        })
        .success(function (result) {
        	$scope.groupList = result;
	    });

		// Launch the view to create a new product
		$scope.createView = function () {
			$location.path("/product/add")
		};

		// Create new product
		$scope.createProduct = function () {
			console.log("createProduct");
			$http({
				url: `http://localhost:5000/api/Product`,
				method:'POST',
				data: JSON.stringify({
					name: $scope.product.name,
					description: $scope.product.description,
					unitprice: $scope.product.price
				})
			})
			.success(newProduct => console.log("201 Created", newProduct))
			.then( function() {
				$location.path("/product")
			})
		};

		// Get product details
		$scope.detailProduct = function (id) {
			console.log("detailProduct");
			$http({
				url:`http://localhost:5000/api/Product/${id}`,
				method:'GET'
			})
			.success( function(prod) {
				$scope.$parent.prod = prod;
			})
			.then( function() {
				$location.path("/product/detail")
			})
		};

		// Get product details
		$scope.detailView = function (id) {
			$http({
				url:`http://localhost:5000/api/Product/${id}`,
				method:'GET'
			})
			.success( function(prod) {
				$scope.$parent.prod = prod;
			})
			.then( function() {
				$location.path("/product/detail")
			})
		};

		// Edit existing products
		$scope.editProduct = function (id) {
			$http({
				url: `http://localhost:5000/api/Product/${id}`,
				method: 'GET'
			})
			.success( function(prod) {
				$scope.$parent.prod = prod;
			})
			.then(function() {
				$location.path("/product/edit");
			})
		};

		// Save changes to edited product
		$scope.saveProduct = function (id) {
			console.log(id);
			$http({
				url: `http://localhost:5000/api/Product/${id}`,
				method: 'PUT',
				data: JSON.stringify({
					ProductId: $scope.prod.ProductId,
					Name: $scope.prod.Name,
					Description: $scope.prod.Description,
					UnitPrice: $scope.prod.UnitPrice
				})
			})
			.success( function(prod) {
				console.log(prod);
				$scope.$parent.prod = prod;
			})
			.then( function() {
				$location.path("/product")
			})
		};

		$scope.deleteProduct = function(id) {
			$http({
				url: `http://localhost:5000/api/Product/${id}`,
				method: 'DELETE'
			})
			.success( function(prod) {
				$scope.$parent.prod = prod;
			})
			.then( function() {
				$location.path("/product")
			})
		};

	}
]);