"use strict";

MediaBay.controller('NewProductController', [
	'$http',
	'$scope',

	function ($http, $scope) {

		$scope.product = [];

		$scope.createProduct = function () {
			$http({
				url:'http://localhost:5000/api/Product',
				method:'POST',
				data: JSON.stringify({
					name: $scope.product.name,
					description: $scope.product.description,
					price: $scope.product.price
				})
			})
			.success(newProduct => console.log("201 Created", newProduct))
		};
	}
]);