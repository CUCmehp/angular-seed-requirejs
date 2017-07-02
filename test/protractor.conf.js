/**
 * Created by CUCmehp on 2017/07/02
 */
//安装:1、npm install -g protractor;  2、webdriver-manager update
//运行说明：protractor protractor.conf.js

exports.config = {
    directConnect: true,
 
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },
 
    // Spec patterns are relative to the current working directly when
    // protractor is called.
    // specs: ['e2e/sample-spec.js'],
    specs: [ 'e2e/scenarios.js' ],
    // specs: ['e2e/*.js'],
 
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};