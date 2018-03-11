var app = angular.module('calypso');

app.controller('messageController',['$scope','studentService','$routeParams',function($scope,studentService,$routeParams) {
	
	$scope.getMessages = function() {
		var promise = studentService.getMessages($routeParams.schoolId);
		promise.then(function(response) {
			$scope.messages = response;
		});
	}
	
	$scope.getMessages();
	
	
	/*
	 * Sample data
	
	$scope.messages = [{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018 12:30 PM',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	},{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018 12:33 PM',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	},{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018 12:40 PM',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	},{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018 12:50 PM',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	},{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	},{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	},{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	},{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	},{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	},{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	},{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	},{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	},{
		from: 'Yatish',
		subject : 'Home Work',
		dateTime : '12th june 2018',
		body : 'He yo yo dsfdsa  fkdsfjkldsfkldskf dsalk fsdaj fields and what else'
	}];
	
	 */
	
}]);