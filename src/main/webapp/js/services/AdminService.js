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
		})
		return promsie;
	}
});