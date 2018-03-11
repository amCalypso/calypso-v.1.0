var app = angular.module('calypso');

app.service("studentService", function($http,$q) {
	
	this.getMessages = function(schoolId) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/student/messages/" + schoolId,
				method : "GET",
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.getStudentObject = function(schoolId) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/student/studentPersonalData/" + schoolId,
				method : "GET",
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.saveStudentObject = function(student,schoolId) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/student/studentPersonalData/" + schoolId,
				method : "POST",
				data : student
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
});