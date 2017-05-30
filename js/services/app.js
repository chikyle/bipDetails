var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/pitches', {
        templateUrl: 'views/pitches.html',
        controller: 'ListController'
    }).
    when('/details', { // This will eventually be /details/:pitchId
        templateUrl: 'views/details.html',
        controller: 'DetailsController'
    }).otherwise({
        redirectTo: '/pitches'
    });
}]);