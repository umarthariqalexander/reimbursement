var app = angular.module("reimbursement", ['ngRoute', 'ngAnimate', 'ngSanitize', 'ui.bootstrap'])
.controller("mainCtrl", ['$scope', function($scope){
    $scope.test = "Testing Reimbursement App;"; 
}]);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/pages/home.htm'
    });
});