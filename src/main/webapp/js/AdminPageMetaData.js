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
	};
	
	$scope.addNewClassToMetaData = function(Class) {
		if(Class != "" && Class != null) {
			var promise = adminService.addNewClassToMetaData(Class);
			promise.then(function(response) {
				console.log(response.body.status);
				$scope.newClass = "";
			})
		}
		$scope.newClass = "";
	};
	
	$scope.addNewSectionToMetaData = function(Section) {
		if(Section != "" && Section != null) {
			var promise = adminService.addNewClassToMetaData(Section);
			promise.then(function(response) {
				console.log(response.body.status);
				$scope.newSection = "";
			})
		}
	};
	
	$scope.addNewSubjectToMetaData = function(Subject) {
		if(Subject != "" && Subject != null) {
			var promise = adminService.addNewClassToMetaData(Subject);
			promise.then(function(response) {
				console.log(response.body.status);
				$scope.newSubject = "";
			})
		}
	};
});