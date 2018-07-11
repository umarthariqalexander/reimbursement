angular.module("reimbursement")
.directive('headLessDropDown', function(){
    return{
      scope: {
        id: '=id',
        items: '=items'
      },
      templateUrl: "/scripts/directives/headLessDropDown/index.html",
    }
});