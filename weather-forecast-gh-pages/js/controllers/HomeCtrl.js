angular.module("weatherApp")
	.controller("HomeCtrl", function($scope, $location, CityNameService){
		$scope.city = CityNameService.cityName;

		$scope.$watch("city", function(newVal, oldVal){
			CityNameService.cityName = $scope.city;
		});

		$scope.getForecast = function(){
			$location.path("/forecast/2");
		};
	});