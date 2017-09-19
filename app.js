var testApp = angular.module("testApp", []);
testApp.controller('contentController' , function($scope, $http) {

  var url = "data.txt";
  $http.get(url).then(function(response) {
    $scope.list = response.data;
  });

  $scope.addCommande = function() {
    $scope.list.push({name: $scope.name, desc: $scope.desc});
  };
});
