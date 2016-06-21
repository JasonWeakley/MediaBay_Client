"use strict";

MediaBay.controller('NewProductController', [
	'$http',
	'$scope',

	function ($http, $scope) {

		$scope.product = {
			name: "",
			description: "",
			price: 0.00
		};

		$scope.createProduct = function () {

			$http({
				url:'http://localhost:5000/api/Product',
				method:'POST',
				data: JSON.stringify($scope.product)
			})
			.success(newProduct => console.log("201 Created", newProduct))
		};
	}
]);