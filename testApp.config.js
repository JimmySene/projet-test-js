angular.module('testApp').config(['$locationProvider', '$routeProvider',
function config($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  when('/', {
    template : ' <commandes-list></commandes-list>'
  }).
  otherwise('/');
}]);
