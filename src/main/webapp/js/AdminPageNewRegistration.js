var app = angular.module('calypso');

app.controller("adminNewRegistration",function($scope,adminService,$routeParams,fileReader){
	
	$scope.classes = [{id:1,label:"1st Standard"},{id:2,label:"2st Standard"}]; //need to changed to fetch from REST call
	$scope.sections = [{id:"A",label:"A Section"},{id:"B",label:"B Section"}]; //need to changed to fetch from REST call
	$scope.student = {};
	
	
	$scope.maleClicked = function(maleClicked) {
		if(maleClicked == true) {
			$scope.student.female = false;
		}
	}
	
	$scope.femaleClicked = function(femaleClicked) {
		if(femaleClicked == true) {
			$scope.student.male = false;
		}
	}
	
	$scope.saveStudentObject = function(studentObject) {
		var promise = adminService.saveStudentObject(studentObject,$routeParams.schoolId);
		promise.then(function(response) {
			console.log(response.body.result);
		})
	}
	
	$scope.student.photo = "";
    
    $scope.$on("fileProgress", function(e, progress) {
      $scope.progress = progress.loaded / progress.total;
    });
	
});



/*
 * Image upload code. 3rd party
 */
 




  app.directive("ngFileSelect", function(fileReader, $timeout) {
    return {
      scope: {
        ngModel: '='
      },
      link: function($scope, el) {
        function getFile(file) {
          fileReader.readAsDataUrl(file, $scope)
            .then(function(result) {
              $timeout(function() {
                $scope.ngModel = result;
              });
            });
        }

        el.bind("change", function(e) {
          var file = (e.srcElement || e.target).files[0];
          getFile(file);
        });
      }
    };
  });

app.factory("fileReader", function($q, $log) {
  var onLoad = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.resolve(reader.result);
      });
    };
  };

  var onError = function(reader, deferred, scope) {
    return function() {
      scope.$apply(function() {
        deferred.reject(reader.result);
      });
    };
  };

  var onProgress = function(reader, scope) {
    return function(event) {
      scope.$broadcast("fileProgress", {
        total: event.total,
        loaded: event.loaded
      });
    };
  };

  var getReader = function(deferred, scope) {
    var reader = new FileReader();
    reader.onload = onLoad(reader, deferred, scope);
    reader.onerror = onError(reader, deferred, scope);
    reader.onprogress = onProgress(reader, scope);
    return reader;
  };

  var readAsDataURL = function(file, scope) {
    var deferred = $q.defer();

    var reader = getReader(deferred, scope);
    reader.readAsDataURL(file);

    return deferred.promise;
  };

  return {
    readAsDataUrl: readAsDataURL
  };
});