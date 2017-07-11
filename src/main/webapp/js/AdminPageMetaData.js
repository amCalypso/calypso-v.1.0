var app = angular.module('calypso');

app.controller("adminMetaData",function($scope,adminService,$routeParams){
	
	$scope.populateMetaData = function() {
		var promise = adminService.getMetaDataClasses($routeParams.schoolId);
		promise.then(function(response) {
			var metaData = response.body.metaData;
			$scope.metaDataClasses = metaData.Classes;
			$scope.metaDataSections = metaData.Sections;
			$scope.metaDataSubjects = metaData.Subjects;
		})
	}
});