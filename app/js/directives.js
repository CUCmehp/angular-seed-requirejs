// "use strict";

// /* Directives */

// angular.module("myApp.directives", []).directive("appVersion", [
//   "version",
//   function(version) {
//     return function(scope, elm, attrs) {
//       elm.text(version);
//     };
//   }
// ]);

define(["js/directives"], function() {
  angular.module( "myApp.directives", [])
  .directive("appVersion", [
    function() {
      return "1.0.0"
    }
  ]);
});

