var app = angular.module('calypso');

	 
app.controller('timeTableController', ['$scope', '$http','adminService','$routeParams', function ($scope, $http,adminService,$routeParams) {

	
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
  
  $scope.saveTimeTable = function(timeTableData) {
	  var promise = adminService.savetimeTableData($routeParams.schoolId,$scope.displayedTimeTableCriteria,timeTableData);
		promise.then(function(response) {
			console.log("Successfully Saved");
		});
  };
  
  $scope.displayedTimeTableCriteria = {};
  
  $scope.getTimeTable = function(selectedYear,selectedClass,selectedSection) {
	  var promise = adminService.gettimeTableData($routeParams.schoolId,selectedYear,selectedClass,selectedSection);
		promise.then(function(response) {
			$scope.timeTableData = response.body.timeTableData;
			$scope.timeTableData.enableCellEditOnFocus = true;
			$scope.updateColumnWidths();
			$scope.displayedTimeTableCriteria.selectedYear = selectedYear;
			$scope.displayedTimeTableCriteria.selectedClass = selectedClass;
			$scope.displayedTimeTableCriteria.selectedSection = selectedSection;
		});
  };
	
  $scope.timeTableData = { enableCellEditOnFocus: true };
 
  $scope.timeTableData.columnDefs = [{ name: 'No_Data', displayName: 'No Data', width: '100%'}];
  
  /*$scope.timeTableData.columnDefs = [
    { name: 'id', displayName: 'Roll no'},
    { name: 'name', displayName: 'Name'}
    
  ];*/
  
  
  $scope.updateColumnWidths = function() {
	  var timeTableColSize = 100/$scope.timeTableData.columnDefs.length;
	  var size = Math.floor(timeTableColSize);
	  var remainingColSize = (100 - (Math.floor(timeTableColSize)*($scope.timeTableData.columnDefs.length)))
	  var timeIntervalColSize = remainingColSize;
	  for(var i = 0; i < $scope.timeTableData.columnDefs.length; i++) {
		  if($scope.timeTableData.columnDefs[i].name == "timeInterval") {
			  $scope.timeTableData.columnDefs[i].width = timeIntervalColSize.toString() + "%";
		  } else {
			  $scope.timeTableData.columnDefs[i].width = Math.floor(timeTableColSize).toString() + "%";
		  }
	  }
  }
  
  
  //$scope.timeTableData.data = [{id:'1',name:'yatish'}];
  
  $scope.timeTableData.data = [];
  
  
//adding empty rows to make sure, that there will  be no empty space after data rows
  for(var i = 0; i < 18; i++) {
	  var obj = {};
	  if(i == 8) {
		  obj.No_Data = "Please Select the Year,  Class,  Section  in  dropdowns  present  above  the  table  and click  on  'Get Time Table'  Button";
	  }
	  $scope.timeTableData.data.push(obj);
  }
  
  $scope.msg = {};
  
  $scope.timeTableData.onRegisterApi = function(gridApi){
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
       $scope.timeTableData.data = data;
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