angular.module('reimbursement')
.controller("appHeaderCtrl", ['$scope', function($scope){
    $scope.items = [
        'My Profile',
        'Change password',
        'Notification Settings',
        'Sign out'
      ]; 
      $scope.toggled = function(open){
        console.log("Toggled");
      };
      $scope.status = {
        isopen: false
      };    
}]);