var app = angular.module('calypso');

app.service("adminService", function($http,$q) {
	
	this.saveStudentObject = function(student,schoolId) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/newStudent/" + schoolId,
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
	
	this.getAttendanceData = function(schoolId,selectedYear,selectedMonth,selectedClass,selectedSection,selectedSubject) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/getAttendanceData/" + schoolId + "/" + selectedYear + "/" + selectedMonth + "/" + selectedClass + "/" + selectedSection + "/" + selectedSubject,
				method : "GET"
		}
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.gettimeTableData = function(schoolId,selectedYear,selectedClass,selectedSection) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/getTimeTableData/" + schoolId + "/" + selectedYear + "/" + selectedClass + "/" + selectedSection,
				method : "GET"
		}
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.saveMarksData = function(schoolId,displayedMarksCriteria,marksData) {
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
	
	this.saveattendanceData = function(schoolId,displayedAttendanceCriteria,attendanceData) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var data = {
				attendanceData : attendanceData,
				displayedAttendanceCriteria : displayedAttendanceCriteria
		};
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/saveAttendanceData/" + schoolId,
				method : "POST",
				data : data
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.savetimeTableData = function(schoolId,displayedTimeTableCriteria,timeTableData) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var data = {
				timeTableData : timeTableData,
				displayedTimeTableCriteria : displayedTimeTableCriteria
		};
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/saveTimeTableData/" + schoolId,
				method : "POST",
				data : data
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.getStudentList = function(schoolId,selectedYear,selectedClass,selectedSection) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/getStudentList/" + schoolId + "/" + selectedYear + "/" + selectedClass + "/" + selectedSection,
				method : "GET"
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	};
	
	this.sendMessage = function(schoolId,selectedYear,selectedClass,selectedSection,selectedStudent,AllInSchool,AllInClass,AllInSection,SingleStudent,From,Title,Body) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var data = {
				selectedYear : selectedYear,
				selectedClass : selectedClass,
				selectedSection : selectedSection,
				selectedStudent : selectedStudent,
				AllInSchool : AllInSchool,
				AllInClass : AllInClass,
				AllInSection : AllInSection,
				SingleStudent : SingleStudent,
				From : From,
				Title : Title,
				Body : Body
		};
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/sendMessage/" + schoolId,
				method : "POST",
				data : data
		};
		$http(prop).then(function(response){
			deferred.resolve(response);
		});
		return promise;
	}
	
	
});