angular.module("reimbursement")
.directive('headLessDropDown', function(){
    return{
      scope: {
        id: '=id',
        items: '=items',
        selected: '&'
      },
      templateUrl: "/scripts/directives/headLessDropDown/index.html",
    }
});