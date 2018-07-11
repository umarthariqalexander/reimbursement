angular.module('reimbursement')
.controller("appHeaderCtrl", ['$scope', function($scope){
    $scope.items = [
        {key: 'PROFILE', desc: 'My Profile'},
        {key: 'PASS', desc: 'Change password'},
        {key: 'NOTIF', desc: 'Notification Settings'},
        {key: 'SINGOUT', desc:'Sign out'}
      ]; 
      $scope.toggled = function(open){
        console.log("Toggled");
      };
      $scope.status = {
        isopen: false
      };    
      $scope.userAccountOptionSelected = function(selected){
        console.log(selected);
      };
}]);