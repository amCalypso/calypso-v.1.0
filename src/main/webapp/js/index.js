var app = angular.module('calypso',['ngRoute','ngTouch', 'ui.grid', 'ui.grid.edit', 'ui.grid.cellNav', 'ui.grid.resizeColumns','isteven-multi-select']);

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
	.when("/:schoolId/student",{
		templateUrl : "studentUiIndex.html",
		controller : "login"
	})
});

//window.onwheel = function(){ return false; }
