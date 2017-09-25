var testApp = angular.module('testApp', ['ngRoute']);

testApp.config(['$routeProvider', function($routeProvider) {

  $routeProvider.

  when('/viewList', {
    templateUrl: 'viewList.html', controller: 'contentController'
  }).

  otherwise({
    redirectTo: '/viewList'
  });

}]);
