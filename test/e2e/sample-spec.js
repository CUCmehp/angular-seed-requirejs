describe("A suite is just a function，", function() {
  //简单测试变量
  var a;
  it("and so is a spec", function() {
    a = true;
    expect(a).toBe(true);
  });

  //官网例子
  it("angular 官网例子", function() {
    describe("angularjs homepage", function() {
      it("should greet the named user", function() {
        browser.get("http://www.angularjs.org");
        element(by.model("yourName")).sendKeys("Julie");
        var greeting = element(by.binding("yourName"));
        expect(greeting.getText()).toEqual("Hello Julie!");
      });
    });

    describe("angularjs homepage todo list", function() {
      it("should add a todo", function() {
        browser.get("https://angularjs.org");

        element(by.model("todoList.todoText")).sendKeys(
          "write first protractor test"
        );
        element(by.css('[value="add"]')).click();

        var todoList = element.all(by.repeater("todo in todoList.todos"));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual(
          "write first protractor test"
        );

        // You wrote your first test, cross it off the list
        todoList.get(2).element(by.css("input")).click();
        var completedAmount = element.all(by.css(".done-true"));
        expect(completedAmount.count()).toEqual(2);
      });
    });
  });

  //测试打开百度
  it("open baidu, get title.", function() {
    //设置不要等待加载angular
    browser.waitForAngularEnabled(false);
    browser.get("http://www.baidu.com");
    expect(browser.getTitle()).toEqual("百度一下，你就知道");
    browser.waitForAngularEnabled(true);
  });
});
