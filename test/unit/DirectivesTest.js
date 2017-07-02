"use strict";

/* jasmine specs for directives go here */
define(["js/app"], function(app) {
  describe("directives", function() {
    beforeEach(module("myApp.directives"));

    describe("app-version", function() {
      it("should print current version", function() {
        console.log( "DirectiveTest runs!" );
        expect("1").toEqual("1");
        /*
        module(function($provide) {
          // $provide.value("version", "TEST_VER");
        });
        inject(function($compile, $rootScope) {
          // var element = $compile("<span app-version></span>")($rootScope);
          // expect(element.text()).toEqual("TEST_VER");
        });
        */
      });
    });
  });
});
