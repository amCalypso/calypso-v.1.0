var app = angular.module('calypso');

	 
app.controller('attendanceController', ['$scope', '$http','adminService','$routeParams', function ($scope, $http,adminService,$routeParams) {

	
	$scope.years = [];
	var date = new Date();
	var year = date.getFullYear();
	$scope.selectedYear = year.toString();
	$scope.years.push(year.toString());
	
	for(var i = 1; i < 100; i++) {
		$scope.years.push((year - i).toString());
	}
	
	$scope.months = [];
	var month = date.getMonth();
	$scope.selectedMonth = month + 1;
	for(var i = 1; i <= 12; i++) {
		var obj = {};
		obj.id = i;
		if(i == 1) {
			obj.label = "January";
		} else if(i == 2) {
			obj.label = "February";
		} else if(i == 3) {
			obj.label = "March";
		} else if(i == 4) {
			obj.label = "April";
		} else if(i == 5) {
			obj.label = "May";
		} else if(i == 6) {
			obj.label = "June";
		} else if(i == 7) {
			obj.label = "July";
		} else if(i == 8) {
			obj.label = "August";
		} else if(i == 9) {
			obj.label = "September";
		} else if(i == 10) {
			obj.label = "October";
		} else if(i == 11) {
			obj.label = "November";
		} else if(i == 12) {
			obj.label = "December";
		}
		$scope.months.push(obj);
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

		  $scope.attendanceData.columnDefs.pop();
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
		  $scope.attendanceData.columnDefs.push(obj);
		  marksColSize = 90/$scope.attendanceData.columnDefs.length;
		  size = Math.floor(marksColSize);
		  remainingColSize = (90 - (Math.floor(marksColSize)*($scope.attendanceData.columnDefs.length)))
		  nameColSize = 10 + remainingColSize;
		  for(var i = 0; i < $scope.attendanceData.columnDefs.length; i++) {
			  if($scope.attendanceData.columnDefs[i].name == "name") {
				  $scope.attendanceData.columnDefs[i].width = nameColSize.toString() + "%";
			  } else {
				  $scope.attendanceData.columnDefs[i].width = Math.floor(marksColSize).toString() + "%";
			  }
		  }
		  var obj = {};
		  obj.name = "result";
		  obj.displayName = "Result";
		  obj.width = size + "%";
		  $scope.attendanceData.columnDefs.push(obj);
		  
  	}
  };
  
  $scope.saveAttendance = function(attendanceData) {
	  var promise = adminService.saveattendanceData($routeParams.schoolId,$scope.displayedAttendanceCriteria,attendanceData);
		promise.then(function(response) {
			console.log("Successfully Saved");
		});
  };
  
  $scope.displayedAttendanceCriteria = {};
  
  $scope.getAttendanceData = function(selectedYear,selectedMonth,selectedClass,selectedSection,selectedSubject) {
	  var promise = adminService.getAttendanceData($routeParams.schoolId,selectedYear,selectedMonth,selectedClass,selectedSection,selectedSubject);
		promise.then(function(response) {
			$scope.attendanceData = response.body.attendanceData;
			$scope.attendanceData.enableCellEditOnFocus = true;
			$scope.updateColumnWidths();
			$scope.displayedAttendanceCriteria.selectedYear = selectedYear;
			$scope.displayedAttendanceCriteria.selectedClass = selectedClass;
			$scope.displayedAttendanceCriteria.selectedSection = selectedSection;
			$scope.displayedAttendanceCriteria.selectedMonth = selectedMonth;
			$scope.displayedAttendanceCriteria.selectedSubject = selectedSubject;
		});
  };
	
  $scope.attendanceData = { enableCellEditOnFocus: true };
 
  $scope.attendanceData.columnDefs = [{ name: 'No_Data', displayName: 'No Data', width: '100%'}];
  
  /*$scope.attendanceData.columnDefs = [
    { name: 'id', displayName: 'Roll no'},
    { name: 'name', displayName: 'Name'}
    
  ];*/
  
  
  $scope.updateColumnWidths = function() {
	  var marksColSize = 90/$scope.attendanceData.columnDefs.length;
	  var size = Math.floor(marksColSize);
	  var remainingColSize = (90 - (Math.floor(marksColSize)*($scope.attendanceData.columnDefs.length)))
	  var nameColSize = 10 + remainingColSize;
	  for(var i = 0; i < $scope.attendanceData.columnDefs.length; i++) {
		  if($scope.attendanceData.columnDefs[i].name == "name") {
			  $scope.attendanceData.columnDefs[i].width = nameColSize.toString() + "%";
		  } else {
			  $scope.attendanceData.columnDefs[i].width = Math.floor(marksColSize).toString() + "%";
		  }
	  }
  }
  
  
  //$scope.attendanceData.data = [{id:'1',name:'yatish'}];
  
  $scope.attendanceData.data = [];
  
  
//adding empty rows to make sure, that there will  be no empty space after data rows
  for(var i = 0; i < 18; i++) {
	  var obj = {};
	  if(i == 8) {
		  obj.No_Data = "Please Select the Year,  Month,  Section,  Subject  in  dropdowns  present  above  the  table  and click  on  'Get Attendance Sheet'  Button";
	  }
	  $scope.attendanceData.data.push(obj);
  }
  
  $scope.msg = {};
  
  $scope.attendanceData.onRegisterApi = function(gridApi){
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
       $scope.attendanceData.data = data;
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