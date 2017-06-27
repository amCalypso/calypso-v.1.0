var app = angular.module('calypso');

app.controller("login",function($scope,LoginService,$routeParams){
	
	schoolId = $routeParams.schoolId;
	$scope.authenticationSuccess = false;
	$scope.authenticationFailure = false;
	
	$scope.Login = function() {
		angular.element("#username").focus();
		var promise = LoginService.validateLogin($scope.username,$scope.password,schoolId);
		promise.then(function(result) {
			if(result.status == "success") {
				$scope.authenticationSuccess = true;
			} else if(result.status == "failure") {
				$scope.authenticationFailure = true;
			}
		});
	};
	
		
});