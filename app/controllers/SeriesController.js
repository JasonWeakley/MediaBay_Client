"use strict";

MediaBay.controller('SeriesController', [
	'$http',
	'$scope',
	'$location',

	function ($http, $scope, $location) {

		$scope.series =[];

		$http
			.get(`http://localhost:5000/api/Series`)
			.success(ser => $scope.series = ser);

		// Launch the view to create a new series
		$scope.createView = function () {
			$location.path("/series/add")
		};

		// Create new series
		$scope.addSeries = function () {
			$http({
				url: `http://localhost:5000/api/Series`,
				method: 'POST',
				data: JSON.stringify({
					name: $scope.series.name,
					description: $scope.series.description
				})
			})
			.success(newSeries => console.log("201 Created", newSeries))
			.then( function() {
				$location.path("/series")
			})
		};

		// Get series details
		$scope.detailSeries = function (id) {
			console.log("detailSeries");
			$http({
				url: `http://localhost:5000/api/Series/${id}`,
				method: 'GET'
			})
			.success( function(ser) {
				console.log("detailSeries.success");
				$scope.$parent.ser = ser;
			})
			.then( function() {
				console.log("detailSeries.then")
				$location.path("/series/detail")
			})
		};

		// Edit existing series
		$scope.editSeries = function (id) {
			$http({
				url: `http://localhost:5000/api/Series/${id}`,
				method: 'GET'
			})
			.success( function(ser) {
				$scope.$parent.ser = ser;
			})
			.then(function() {
				$location.path("/series/edit");
			})
		};

		// Save changes to editied series
		$scope.saveSeries = function (id) {
			console.log(id);
			$http({
				url: `http://localhost:5000/api/Series/${id}`,
				method: 'PUT',
				data: JSON.stringify({
					SeriesId: $scope.ser.SeriesId,
					Name: $scope.ser.Name,
					Description: $scope.ser.Description
				})
			})
			.success( function(ser) {
				console.log(ser);
				$scope.$parent.ser = ser;
			})
			.then( function() {
				$location.path("/series/detail")
			})
		};

		// Delete a series
		$scope.deleteSeries = function(id) {
			$http({
				url: `http://localhost:5000/api/Series/${id}`,
				method: 'DELETE'
			})
			.success( function(ser) {
				$scope.$parent.ser = ser;
			})
			.then( function() {
				$location.path("/series")
			})
		};

	}
]);