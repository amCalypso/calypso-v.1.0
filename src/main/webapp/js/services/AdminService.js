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
	
	this.getMetaDataClasses = function(schoolId) {
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
	
	this.addNewClassToMetaData = function(Class) {
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
	
	this.addNewSectionToMetaData = function(Section) {
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
	
	this.addNewSubjectToMetaData = function(Subject) {
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
	
});