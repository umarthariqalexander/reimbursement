angular.module("reimbursement")
.directive("profilePic", function(){
    return{
        scope:{
            letter: '=letter',
            imageUrl: '=imageUrl'
        },
        templateUrl: "./scripts/directives/ProfilePic/index.html"
    }
});