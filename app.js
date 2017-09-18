var testApp = angular.module("testApp", []);
testApp.controller('contentController', function($scope) {

    var list = [];

    $scope.name = "";
    $scope.desc = "";

    $scope.addCommande = function() {
          list.push($scope.name, $scope.desc);
          alert(list[0]);
    }


});
