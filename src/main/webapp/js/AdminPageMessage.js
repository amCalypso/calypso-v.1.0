var app = angular.module('calypso');

	 
app.controller('adminMessageController', ['$scope', '$http','adminService','$routeParams', function ($scope, $http,adminService,$routeParams) {
	
	$scope.years = [];
	var date = new Date();
	var year = date.getFullYear();
	$scope.selectedYear = year.toString();
	$scope.years.push(year.toString());
	$scope.AllInSchool = true;
	$scope.AllInClass = false;
	$scope.AllInSection = false;
	$scope.SingleStudent = false;
	
	for(var i = 1; i < 100; i++) {
		$scope.years.push((year - i).toString());
	}
	
	$scope.AllInSchoolClicked = function() {
		$scope.AllInSchool = true;
		$scope.AllInClass = false;
		$scope.AllInSection = false;
		$scope.SingleStudent = false;
	}
	
	$scope.AllInClassClicked = function() {
		$scope.AllInSchool = false;
		$scope.AllInClass = true;
		$scope.AllInSection = false;
		$scope.SingleStudent = false;
	}
	
	$scope.AllInSectionClicked = function() {
		$scope.AllInSchool = false;
		$scope.AllInClass = false;
		$scope.AllInSection = true;
		$scope.SingleStudent = false;
	}
	
	$scope.SingleStudentClicked = function() {
		$scope.AllInSchool = false;
		$scope.AllInClass = false;
		$scope.AllInSection = false;
		$scope.SingleStudent = true;
	}
	
	$scope.populateMetaData = function() {
		var promise = adminService.getMetaDataClasses($routeParams.schoolId);
		promise.then(function(response) {
			var metaData = response.body.metaData;
			$scope.metaDataClasses = metaData.Classes;
			$scope.metaDataSections = metaData.Sections;
			$scope.metaDataSubjects = metaData.Subjects;
		});
	};
	
	$scope.getStudentList = function(selectedYear,selectedClass,selectedSection) {
		if(selectedYear && selectedClass && selectedSection) {
			var promise = adminService.getStudentList($routeParams.schoolId,selectedYear,selectedClass,selectedSection);
			promise.then(function(response) {
				$scope.students = response.body.students;
			});
		} else {
			console.log("Either of year, class or section is not selected");
		}
	};
	
	$scope.sendMessage = function(Message) {
		var promise = adminService.sendMessage($routeParams.schoolId,$scope.selectedYear,$scope.selectedClass,$scope.selectedSection,$scope.selectedStudent,$scope.AllInSchool,$scope.AllInClass,$scope.AllInSection,$scope.SingleStudent,Message.from,Message.title,Message.body);
		promise.then(function(respnse) {
			consoel.log("Message sent successfully");
		});
	}
	
}]);