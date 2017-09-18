var testApp = angular.module("testApp", []);
testApp.controller('contentController', function($scope) {

    $scope.name = "";
    $scope.desc = "";
    $scope.list = [];

    $scope.addCommande = function() {
          $scope.list.push({ name: $scope.name, desc: $scope.desc});
    };
});
