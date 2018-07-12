angular.module("reimbursement")
.directive("profilePic", function(){
    return{
        scope:{
            letter: '=letter',
            imageUrl: '=imageUrl',
            size: '='
        },
        templateUrl: "./scripts/directives/ProfilePic/index.html"
    }
});