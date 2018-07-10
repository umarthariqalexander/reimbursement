var app = angular.module("reimbursement", ['ngRoute'])
.controller("mainCtrl", ['$scope', function($scope){
    $scope.test = "Testing Reimbursement App;";
}]);

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '/pages/home.htm'
    });
});