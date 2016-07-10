angular.module('weatherApp', ["ngRoute", "ngResource"])
	.config(function($routeProvider){
		$routeProvider
			.when("/", {
				templateUrl: "views/home.html",
				controller: "HomeCtrl"
			})
			.when("/forecast/:days?", {
				templateUrl: "views/forecast.html",
				controller: "ForecastCtrl"
			})
			.otherwise("/forecast");
	});
