var app = angular.module('calypso',["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
	.when("/",{
		templateUrl : "html/schoolIdRequired.html"
	})
	.when("/:schoolId",{
		templateUrl : "index.html",
		controller : "login"
	})
	.when("/:schoolId/admin",{
		templateUrl : "adminUiIndex.html",
		controller : "login"
	})
})
