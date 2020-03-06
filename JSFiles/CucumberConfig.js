"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
//require('jasmine-reporters');
exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //seleniumAddress:'http://hub.crossbrowsertesting.com:80/wd/hub',    
    // change this to your USERNAME and AUTHKEY
    seleniumAddress: 'http://mahesh.dindigala@jivainfotech.com:u915458c1f206e77@hub.crossbrowsertesting.com:80/wd/hub',
    //add more browsers to this array for more parllel tests!!
    multiCapabilities: [
        {
            'name': 'CrossBrowserTesting POC',
            CBT_BROWSERNAME: '',
            // 'browserName': 'Chrome',
            // 'platform': 'Windows 10',
            record_video: true,
            record_network: false,
            record_snapshot: false,
        },
        {
            'name': 'CrossBrowserTesting POC',
            CBT_BROWSERNAME: '',
            // 'browserName': 'Firefox',
            // 'platform': 'Windows 10',
            record_video: true,
            record_network: false,
            record_snapshot: false,
        },
    ],
    specs: ['../FeatureFiles/*.feature'],
    cucumberOpts: {
        format: "json:./cucumberreport.json",
        strict: true,
        require: [
            './StepDefinitions/*.js' // accepts a glob
        ]
    },
    plugins: [{
            package: 'protractor-multiple-cucumber-html-reporter-plugin',
            options: {
                // read the options part for more options
                automaticallyGenerateReport: true,
                removeExistingJsonReportFile: true,
                removeOriginalJsonReportFile: true,
                pageTitle: "JIVA Automation Test Report",
                reportName: "JIVA : Angular Application",
                displayDuration: true,
                durationInMS: true,
                openReportInBrowser: true
            }
        }],
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
    },
    onPrepare: () => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.manage().window().maximize();
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9DdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2QztBQUU3QywrQkFBK0I7QUFDcEIsUUFBQSxNQUFNLEdBQVc7SUFDeEIsdUNBQXVDO0lBQ3ZDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxzQkFBc0I7SUFDdEIsa0RBQWtEO0lBRWxELHFFQUFxRTtJQUNyRSwyQ0FBMkM7SUFDM0MsZUFBZSxFQUFFLGlHQUFpRztJQUVsSCwwREFBMEQ7SUFDMUQsaUJBQWlCLEVBQUU7UUFDZjtZQUNJLE1BQU0sRUFBRSx5QkFBeUI7WUFDakMsZUFBZSxFQUFFLEVBQUU7WUFDbkIsMkJBQTJCO1lBQzNCLDRCQUE0QjtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixjQUFjLEVBQUUsS0FBSztZQUNyQixlQUFlLEVBQUUsS0FBSztTQVd6QjtRQUVEO1lBQ0ksTUFBTSxFQUFFLHlCQUF5QjtZQUNqQyxlQUFlLEVBQUUsRUFBRTtZQUNuQiw0QkFBNEI7WUFDNUIsNEJBQTRCO1lBQzVCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLGVBQWUsRUFBRSxLQUFLO1NBV3pCO0tBb0JKO0lBRUQsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUM7SUFDcEMsWUFBWSxFQUFFO1FBQ1YsTUFBTSxFQUFFLDRCQUE0QjtRQUNwQyxNQUFNLEVBQUUsSUFBSTtRQUNaLE9BQU8sRUFBRTtZQUNMLHdCQUF3QixDQUFDLGlCQUFpQjtTQUM3QztLQUNKO0lBQ0QsT0FBTyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsbURBQW1EO1lBQzVELE9BQU8sRUFBRTtnQkFDTCx5Q0FBeUM7Z0JBQ3pDLDJCQUEyQixFQUFFLElBQUk7Z0JBQ2pDLDRCQUE0QixFQUFFLElBQUk7Z0JBQ2xDLDRCQUE0QixFQUFFLElBQUk7Z0JBQ2xDLFNBQVMsRUFBRSw2QkFBNkI7Z0JBQ3hDLFVBQVUsRUFBRSw0QkFBNEI7Z0JBQ3hDLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsbUJBQW1CLEVBQUUsSUFBSTthQUU1QjtTQUNKLENBQUM7SUFFRixlQUFlLEVBQUU7UUFDYixTQUFTLEVBQUUsSUFBSTtRQUNmLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGlCQUFpQixFQUFFLElBQUk7S0FDMUI7SUFDRCxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ1osb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0NBQ0osQ0FBQyJ9