var app = angular.module('calypso');

app.service("adminService", function($http,$q) {
	
	this.saveStudentObject = function(student) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/newStudent",
				method : "POST",
				data : student
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.getMetaData = function(schoolId) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/metaData/" + schoolId,
				method : "GET"
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.addNewClassToMetaData = function(schoolId,Class) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var data = {newClass:Class};
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/addNewClassToMetaData/" + schoolId,
				method : "POST",
				data : data
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.addNewSectionToMetaData = function(schoolId,Section) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var data = {newSection:Section};
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/addNewSectionToMetaData/" + schoolId,
				method : "POST",
				data : data
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.addNewSubjectToMetaData = function(schoolId,Subject) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var data = {newSubject:Subject};
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/addNewSubjectToMetaData/" + schoolId,
				method : "POST",
				data : data
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.addNewTestOrExamToMetaData = function(schoolId,testOrExam) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var data = {newTestOrExam:testOrExam};
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/addNewTestOrExamToMetaData/" + schoolId,
				method : "POST",
				data : data
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.addNewGradeToMetaData = function(schoolId,grade) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var data = {newGrade:grade};
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/addNewGradeToMetaData/" + schoolId,
				method : "POST",
				data : data
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.addNewGradeToMetaData = function(schoolId,passingGrade) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var data = {passingGrade:passingGrade};
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/addNewGradeToMetaData/" + schoolId,
				method : "POST",
				data : data
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.getMarksData = function(schoolId,selectedYear,selectedClass,selectedSection,selectedTestOrExam) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/getMarksData/" + schoolId + "/" + selectedYear + "/" + selectedClass + "/" + selectedSection + "/" + selectedTestOrExam,
				method : "GET"
		}
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.saveMarks = function(schoolId,displayedMarksCriteria,marksData) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var data = {
				marksData : marksData,
				displayedMarksCriteria : displayedMarksCriteria
		};
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/saveMarksData/" + schoolId,
				method : "POST",
				data : data
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
});