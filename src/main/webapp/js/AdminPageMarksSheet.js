var app = angular.module('calypso');

	 
	app.controller('markSheetController', ['$scope', '$http','adminService','$routeParams', function ($scope, $http,adminService,$routeParams) {
		
		$scope.marksData = {};
		$scope.gradeSystemFlag = false;
		
		
		
		$scope.years = [];
		var date = new Date();
		var year = date.getFullYear();
		$scope.selectedYear = year.toString();
		$scope.years.push(year.toString());
		
		for(var i = 1; i < 100; i++) {
			$scope.years.push((year - i).toString());
		}
		
		
		
		
		$scope.populateMetaData = function() {
			var promise = adminService.getMetaDataClasses($routeParams.schoolId);
			promise.then(function(response) {
				var metaData = response.body.metaData;
				$scope.metaDataClasses = metaData.Classes;
				$scope.metaDataSections = metaData.Sections;
				$scope.metaDataSubjects = metaData.Subjects;
				$scope.metaDataTestOrExams = metaData.TestOrExams;
				$scope.metaDataGrades = metaData.Grades;
				$scope.passingGrades = metaData.passingGrades;
				$scope.marksBased = metaData.marksBased;
				$scope.gradeSystemFlag = !$scope.marksBased;
			});
		};
		
	  $scope.addSubjectToColumn = function(subject,passingMarks,totalMarks) {
		  if($scope.subjectDoesntExistInTableAlreadly(subject)) {
			  
			  $scope.marksData.columnDefs.pop();
			  var obj = {};
			  obj.name = subject;
			  obj.displayName = subject;
			  obj.marksBased = !$scope.gradeSystemFlag;
			  if($scope.gradeSystemFlag == false) {
				  obj.passingMarks = passingMarks;
				  obj.totalMarks = totalMarks;
			  } else {
				  obj.editDropdownValueLabel = subject;
				  obj.editableCellTemplate = "ui-grid/dropdownEditor";
				  obj.editDropdownOptionsArray = [];
				  for(var i = 0; i < $scope.metaDataGrades.length; i++) {
					  var insideObj = {};
					  insideObj.id = $scope.metaDataGrades[i];
					  insideObj[subject] = $scope.metaDataGrades[i];
					  obj.editDropdownOptionsArray.push(insideObj);
				  }
				  
			  }  
			  $scope.marksData.columnDefs.push(obj);
			  marksColSize = 90/$scope.marksData.columnDefs.length;
			  size = Math.floor(marksColSize);
			  remainingColSize = (90 - (Math.floor(marksColSize)*($scope.marksData.columnDefs.length)))
			  nameColSize = 10 + remainingColSize;
			  for(var i = 0; i < $scope.marksData.columnDefs.length; i++) {
				  if($scope.marksData.columnDefs[i].name == "name") {
					  $scope.marksData.columnDefs[i].width = nameColSize.toString() + "%";
				  } else {
					  $scope.marksData.columnDefs[i].width = Math.floor(marksColSize).toString() + "%";
				  }
			  }
			  var obj = {};
			  obj.name = "result";
			  obj.displayName = "Result";
			  obj.width = size + "%";
			  $scope.marksData.columnDefs.push(obj);
			  
	  	}
	  };
	  
	  $scope.saveMarks = function(marksData) {
		  $scope.updateResult(marksData);
		  var promise = adminService.saveMarksData($routeParams.schoolId,$scope.displayedMarksCriteria,marksData);
			promise.then(function(response) {
				console.log("Successfully Saved");
			});
	  };
	  
	  $scope.updateResult = function(marksData){
		  $scope.markAllPass();
		  for(var i = 2; i < marksData.columnDefs.length - 1; i++) {
			  
			  var data = {};
			  var marks = null;
			  var passingMarks = null;
			  var totalMarks = null;
			  var grade = null;
			  passingMarks = marksData.columnDefs[i].passingMarks;
			  totalMarks = marksData.columnDefs[i].totalMarks;
			  for(var j = 0; j < marksData.data.length; j++) {
				  data = marksData.data[j];
				  if(data.id && data.id != null && data.id != "") {
					  if(data.marksBased == true) {
						  marks = parseInt(data[marksData.columnDefs[i].name]);
						  if(marks != null && passingMarks != null && marks < passingMarks) {
							  $scope.marksData.data[j].result = "FAIL";
						  }
					  } else {
						  grade = data[marksData.columnDefs[i].name];
						  if($scope.passingGrades.indexOf(grade) == -1) {
							  $scope.marksData.data[j].result = "FAIL";
						  }
					  }
				  }
			  }		  		  
		  }
	  };
	  
	  $scope.displayedMarksCriteria = {};
	  
	  $scope.getMarksData = function(selectedYear,selectedClass,selectedSection,selectedTestOrExam) {
		  var promise = adminService.getMarksData($routeParams.schoolId,selectedYear,selectedClass,selectedSection,selectedTestOrExam);
			promise.then(function(response) {
				$scope.marksData = response.body.marksData;
				$scope.marksData.enableCellEditOnFocus = true;
				$scope.updateColumnWidths();
				$scope.displayedMarksCriteria.selectedYear = selectedYear;
				$scope.displayedMarksCriteria.selectedClass = selectedClass;
				$scope.displayedMarksCriteria.selectedSection = selectedSection;
				$scope.displayedMarksCriteria.selectedTestOrExam = selectedTestOrExam;
			});
	  };
	  
	  $scope.subjectDoesntExistInTableAlreadly = function(subject) {
		  for(var i = 0; i < $scope.marksData.columnDefs.length; i++) {
			  if( $scope.marksData.columnDefs[i].name == subject) {
				  return false;
			  }
		  }
		  return true;
	  };
		
	  $scope.marksData = { enableCellEditOnFocus: true };
      
	  
	  $scope.marksData.columnDefs = [{ name: 'No_Data', displayName: 'No Data', width: '100%'}];
	  
	  /*
	  $scope.marksData.columnDefs = [
	    { name: 'id', displayName: 'Roll no'},
	    { name: 'name', displayName: 'Name'}
	    
	  ];*/
	  
	  
	  $scope.updateColumnWidths = function() {
		  var marksColSize = 90/$scope.marksData.columnDefs.length;
		  var size = Math.floor(marksColSize);
		  var remainingColSize = (90 - (Math.floor(marksColSize)*($scope.marksData.columnDefs.length)))
		  var nameColSize = 10 + remainingColSize;
		  for(var i = 0; i < $scope.marksData.columnDefs.length; i++) {
			  if($scope.marksData.columnDefs[i].name == "name") {
				  $scope.marksData.columnDefs[i].width = nameColSize.toString() + "%";
			  } else {
				  $scope.marksData.columnDefs[i].width = Math.floor(marksColSize).toString() + "%";
			  }
		  }
		  var obj = {};
		  obj.name = "result";
		  obj.displayName = "Result";
		  obj.width = size + "%";
		  $scope.marksData.columnDefs.push(obj);
	  }
	  
	  
	  //$scope.marksData.data = [{id:'1',name:'yatish'}];
	  
	  $scope.marksData.data = [];
	  
	  $scope.markAllPass = function() {
		  for(var i = 0; i < $scope.marksData.data.length; i++) {
			  if($scope.marksData.data[i].id && $scope.marksData.data[i].id != "") {
				  $scope.marksData.data[i].result = "PASS";
			  }
		  }
	  };
	  //$scope.markAllPass();
	  
	  
	  //adding empty rows to make sure, that there will  be no empty space after data rows
	  for(var i = 0; i < 18; i++) {
		  var obj = {};
		  if(i == 8) {
			  obj.No_Data = "Please Select the Year,  Class,  Section,  Test/Exam  in  dropdowns  present  above  the  table  and click  on  'Get Marks Sheet'  Button";
		  }
		  if(i == 10) {
			  obj.No_Data = "NOTE :   Once  you  click  on the  'Get Marks Sheet'  Button,  you   can  add  subjects  using  the  options  below";
		  }
		  $scope.marksData.data.push(obj);
	  }
	  
	  $scope.msg = {};
	  
	  $scope.marksData.onRegisterApi = function(gridApi){
	           //set gridApi on scope
	           $scope.gridApi = gridApi;
	           gridApi.edit.on.afterCellEdit($scope,function(rowEntity, colDef, newValue, oldValue){
	             $scope.msg.lastCellEdited = 'edited row id:' + rowEntity.id + ' Column:' + colDef.name + ' newValue:' + newValue + ' oldValue:' + oldValue ;
	             $scope.$apply();
	           });
	         };
	  
	         
	   /*$http.get('/data/500_complex.json')
	     .success(function(data) {
	       for(i = 0; i < data.length; i++){
	         data[i].registered = new Date(data[i].registered);
	         data[i].gender = data[i].gender==='male' ? 1 : 2;
	       }
	       $scope.marksData.data = data;
	     });*/
	 }])
	  
	 .filter('mapGender', function() {
	   var genderHash = {
	     1: 'male',
	     2: 'female'
	   };
	   
	   return function(input) {
	     if (!input){
	       return '';
	     } else {
	       return genderHash[input];
	     }
	   };
	 });
	