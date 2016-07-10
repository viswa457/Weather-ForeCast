angular.module("weatherApp")
	.controller("ForecastCtrl", function($scope, $routeParams, CityNameService, ForecastService){
		var city = CityNameService.cityName;
		$scope.days = $routeParams.days || 2;

		$scope.kelvinToCelsius = function(temp){
			return temp - 273.15;
		};

		ForecastService.get({q: city, cnt: $scope.days}, function(res){
			$scope.reports = res;
		});
	});