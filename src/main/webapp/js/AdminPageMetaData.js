var app = angular.module('calypso');

app.controller("adminMetaData",function($scope,adminService,$routeParams){
	
	
	$scope.marksBased = true;
	$scope.grades = [{name: 'Audi'}, {name: 'BMW'},{name: 'Audi'}, {name: 'BMW'},{name: 'Audi'}, {name: 'BMW'},{name: 'Audi'}, {name: 'BMW'},{name: 'Audi'}, {name: 'BMW'}];
	$scope.passingGrades = [];
	
	$scope.metaDataGrades = ["English","Hindi","Englisha","Hindia","Engldish","Hidndi","Englfdish","Highndi","Enghgjlish","Hihjgndi","Enlkjglish","Hityrndi","fefewaf","grewfrew","fdasfergw","rete","ewrewrew","ewrfewt","hgfdgdf"];
	
	$scope.populateMetaData = function() {
		var promise = adminService.getMetaData($routeParams.schoolId);
		promise.then(function(response) {
			var metaData = response.body.metaData;
			$scope.metaDataClasses = metaData.Classes;
			$scope.metaDataSections = metaData.Sections;
			$scope.metaDataSubjects = metaData.Subjects;
			$scope.metaDataTestOrExams = metaData.TestOrExams;
			$scope.metaDataGrades = metaData.Grades;
			$scope.passingGrades = metaData.passingGrades;
			$scope.marksBased = metaData.marksBased;
		})
	};
	
	$scope.addNewClassToMetaData = function(Class) {
		if(Class != "" && Class != null) {
			var promise = adminService.addNewClassToMetaData($routeParams.schoolId,Class);
			promise.then(function(response) {
				console.log(response.body.status);
				$scope.newClass = "";
			})
		}
		$scope.newClass = "";
	};
	
	$scope.addNewSectionToMetaData = function(Section) {
		if(Section != "" && Section != null) {
			var promise = adminService.addNewClassToMetaData($routeParams.schoolId,Section);
			promise.then(function(response) {
				console.log(response.body.status);
				$scope.newSection = "";
			})
		}
	};
	
	$scope.addNewSubjectToMetaData = function(Subject) {
		if(Subject != "" && Subject != null) {
			var promise = adminService.addNewClassToMetaData($routeParams.schoolId,Subject);
			promise.then(function(response) {
				console.log(response.body.status);
				$scope.newSubject = "";
			})
		}
	};
	
	$scope.addNewTestOrExamToMetaData = function(testOrExam) {
		if(testOrExam != "" && testOrExam != null) {
			var promise = adminService.addNewTestOrExamToMetaData($routeParams.schoolId,testOrExam);
			promise.then(function(response) {
				console.log(response.body.status);
				$scope.newTestOrExam = "";
			})
		}
	};
	
	$scope.addNewGradeToMetaData = function(grade) {
		if(grade != "" && grade != null) {
			var promise = adminService.addNewGradeToMetaData(grade);
			promise.then(function(response) {
				console.log(response.body.status);
			})
		}
	};
	
	$scope.savePassingGrades = function(passingGrades) {
		if(passingGrades != "" && passingGrades != null) {
			var promise = adminService.addNewGradeToMetaData($routeParams.schoolId,passingGrades);
			promise.then(function(response) {
				console.log(response.body.status);
				$scope.newGrade = "";
			})
		}
	}
	
	$scope.marksClicked = function(marksBased) {
		if(marksBased == true) {
			$scope.gradeBased = false;
		}
	};
	
	$scope.gradeClicked = function(gradeBased) {
		if(gradeBased == true) {
			$scope.marksBased = false;
		}
	};
});