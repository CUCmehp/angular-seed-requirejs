"use strict";

define( [ 'angular', 'angular-route', 'js/services', 'js/filters', 'js/controllers' ], function( angular ) {
  var app = angular.module( "myApp", [
    "ngRoute",
    "myApp.services",
    "myApp.filters",
    "myApp.controllers"
  ]);

  app.config([
    "$routeProvider",
    function($routeProvider) {
      $routeProvider.when("/view1", {
        templateUrl: "partials/partial1.html",
        controller: "MyCtrl1"
      });
      $routeProvider.when("/view2", {
        templateUrl: "partials/partial2.html",
        controller: "MyCtrl2"
      });
      $routeProvider.otherwise({ redirectTo: "/view1" });
    }
  ]);

  return app;
});
