angular.module("weatherApp")
	.controller("NavCtrl", function($scope, $location){
		$scope.isActive = function(loc){
			return loc === $location.path();
		};
	});