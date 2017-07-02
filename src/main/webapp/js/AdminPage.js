var app = angular.module('calypso');

app.controller("adminNewRegistration",function($scope,adminService){
	
	$scope.classes = [{id:1,label:"1st Standard"},{id:2,label:"2st Standard"}]; //need to changed to fetch from REST call
	$scope.sections = [{id:"A",label:"A Section"},{id:"B",label:"B Section"}]; //need to changed to fetch from REST call
	$scope.student = {};
	
	
	$scope.maleClicked = function(maleClicked) {
		if(maleClicked == true) {
			$scope.student.female = false;
		}
	}
	
	$scope.femaleClicked = function(femaleClicked) {
		if(femaleClicked == true) {
			$scope.student.male = false;
		}
	}
	
	$scope.saveStudentObject = function(studentObject) {
		var promise = adminService.saveStudentObject(studentObject);
		promise.then(function(response) {
			console.log("Success");
		})
	}
	
})