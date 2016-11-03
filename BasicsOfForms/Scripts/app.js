var app = angular.module("BasicsOfForms", []);


app.controller("FormController", ["$scope", function ($scope) {

    $scope.formSubmit = function (event) {
        //alert("Form Submit called!");
        //mixing jquery and angular not best practice
        var form = $("#AngularForm").serialize();
        console.log("formmdata" + form);

        $.ajax({
            url: "/api/AngularApi/post",
            type: "POST",
            data:form
        }).done(function () {
           
        });




        event.preventDefault();
       
    };

}]);