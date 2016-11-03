var app = angular.module("BasicsOfForms", []);


app.controller("FormController", ["$scope", function ($scope) {

    $scope.formSubmit = function () {
        alert("Form Submit called!");
        
        console.log();


       

    };

}]);