angular.module("weatherApp")
	.service("CityNameService", function(){
		this.cityName = "hyderabad";
	})
	.service("ForecastService", function($resource){
		return $resource("http://api.openweathermap.org/data/2.5/forecast/daily");
	});