"use strict";

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe("test my app, ", function() {
  beforeEach(function() {
    browser.get("http://localhost:8000/app/index.html");
    //browser.get( "http://localhost:8000/index.html" );
  });

  it("should automatically redirect to /view1 when location hash/fragment is empty", function() {
    expect(browser.getCurrentUrl()).toBe(
      "http://localhost:8000/app/index.html#!/view1"
    );
  });

  describe("view1", function() {
    beforeEach(function() {
      browser.setLocation("view1");
    });

    it("should render view1 when user navigates to /view1", function() {
      expect(browser.getCurrentUrl()).toBe(
        "http://localhost:8000/app/index.html#!/view1"
      );
      element.all(by.css(".ng-scope p")).then(function(items) {
        expect(items[0].getText()).toBe("This is the partial for view 1.");
      });
    });
  });

  describe("view2, ", function() {
    beforeEach(function() {
      browser.setLocation("view2");
    });

    it("should render view2 when user navigates to /view2", function() {
      expect(browser.getCurrentUrl()).toBe(
        "http://localhost:8000/app/index.html#!/view2"
      );
      element.all(by.css(".ng-scope p")).then(function(items) {
        expect(items.length).toBe(2);
        expect(items[0].getText()).toBe("This is the partial for view 2.");
      });
      let first = $$(".ng-scope p").first();
      expect(first.getText()).toBe("This is the partial for view 2.");
      let list = $$(".ng-scope p");
      list.count().then(function(value) {
        console.log("list.count(): " + value);
      });
      expect(list.count()).toBe(2);
      expect(list.get(0).getText()).toBe("This is the partial for view 2.");
    });
  });
});
