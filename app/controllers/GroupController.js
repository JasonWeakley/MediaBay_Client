"use strict";

MediaBay.controller('GroupController', [
	'$http',
	'$scope',
	'$location',

	function ($http, $scope, $location) {

		$scope.group =[];

		$http
			.get(`http://localhost:5000/api/Group`)
			.success(grp => $scope.group = grp);

		// Launch the view to create a new group
		$scope.createView = function () {
			$location.path("/group/add")
		};

		// Create new group
		$scope.addGroup = function () {
			$http({
				url: `http://localhost:5000/api/Group`,
				method: 'POST',
				data: JSON.stringify({
					name: $scope.group.name,
					description: $scope.group.description,
					price: $scope.group.price,
					promocode: $scope.group.promocode
				})
			})
			.success(newGroup => console.log("201 Created", newGroup))
			.then( function() {
				$location.path("/groups")
			})
		};

		// Get group details
		$scope.detailGroup = function (id) {
			console.log("detailGroup");
			$http({
				url: `http://localhost:5000/api/Group/${id}`,
				method: 'GET'
			})
			.success( function(grp) {
				console.log("detailGroup.success");
				$scope.$parent.grp = grp;
			})
			.then( function() {
				console.log("detailGroup.then")
				$location.path("/group/detail")
			})
		};

		// Edit existing group
		$scope.editGroup = function (id) {
			$http({
				url: `http://localhost:5000/api/Group/${id}`,
				method: 'GET'
			})
			.success( function(grp) {
				$scope.$parent.grp = grp;
			})
			.then(function() {
				$location.path("/group/edit");
			})
		};

		// Save changes to editied group
		$scope.saveGroup = function (id) {
			console.log(id);
			$http({
				url: `http://localhost:5000/api/Group/${id}`,
				method: 'PUT',
				data: JSON.stringify({
					GroupId: $scope.grp.GroupId,
					Name: $scope.grp.Name,
					Description: $scope.grp.Description,
					UnitPrice: $scope.grp.UnitPrice,
					PromoCode: $scope.grp.PromoCode
				})
			})
			.success( function(grp) {
				console.log(grp);
				$scope.$parent.grp = grp;
			})
			.then( function() {
				$location.path("/groups")
			})
		};

		// Delete a group
		$scope.deleteGroup = function(id) {
			$http({
				url: `http://localhost:5000/api/Group/${id}`,
				method: 'DELETE'
			})
			.success( function(grp) {
				$scope.$parent.grp = grp;
			})
			.then( function() {
				$location.path("/groups")
			})
		};

	}
]);