var app = angular.module('calypso');

app.controller("studentProfileController",function($scope,studentService,$routeParams,fileReader){
	
	$scope.getStudentObject = function() {
		var promise = studentService.getStudentObject($routeParams.schoolId);
		promise.then(function(response) {
			$scope.student = response;
		})
	};
	
	$scope.saveStudentObject = function(studentObject) {
		var promise = studentService.saveStudentObject(studentObject,$routeParams.schoolId);
		promise.then(function(response) {
			console.log(response.body.result);
		})
	};
	
    
});

