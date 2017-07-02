var app = angular.module('calypso');

app.service("LoginService", function($http,$q) {
	
	this.validateLogin = function(username,password,schoolId) {
		var deferred = $q.defer();
		var promise = deferred.promise;
		var tempData = {};
		tempData.username = username;
		tempData.password = password;
		tempData.schoolId = schoolId;
		var prop = {
				url : protocol + "://" +hostname + ":" + port + "/" + project + "/" + mainRoute + "/authenticate",
				method : "POST",
				data : tempData
		}
		$http(prop).then(function(response) {
			deferred.resolve(response);
		})
		return promise;
	};
	
});

app.directive('preventDefault', function() {
    return function(scope, element, attrs) {
        angular.element(element).bind('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
        });
    }
});