var app = angular.module("BasicsOfForms", []);


app.controller("FormController", ["$scope", function ($scope) {

    $scope.formSubmit = function (event) {
        //alert("Form Submit called!");
        event.preventDefault();

    };

}]);