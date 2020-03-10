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
            name: process.env.CBT_BUILD_NAME,
            browser_api_name: process.env.CBT_BROWSER,
            os_api_name: process.env.CBT_OPERATING_SYSTEM,
            screen_resolution: process.env.CBT_RESOLUTION,
            record_video: true,
            record_network: true,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9DdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2QztBQUU3QywrQkFBK0I7QUFDcEIsUUFBQSxNQUFNLEdBQVc7SUFDeEIsdUNBQXVDO0lBQ3ZDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxzQkFBc0I7SUFDdEIsa0RBQWtEO0lBRWxELHFFQUFxRTtJQUNyRSwyQ0FBMkM7SUFDM0MsZUFBZSxFQUFFLGlHQUFpRztJQUVsSCwwREFBMEQ7SUFDMUQsaUJBQWlCLEVBQUU7UUFDZjtZQUNJLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7WUFDaEMsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXO1lBQ3pDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQjtZQUM3QyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsY0FBYyxFQUFFLElBQUk7U0FDdkI7S0ErQ0o7SUFFRCxLQUFLLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztJQUNwQyxZQUFZLEVBQUU7UUFDVixNQUFNLEVBQUUsNEJBQTRCO1FBQ3BDLE1BQU0sRUFBRSxJQUFJO1FBQ1osT0FBTyxFQUFFO1lBQ0wsd0JBQXdCLENBQUMsaUJBQWlCO1NBQzdDO0tBQ0o7SUFDRCxPQUFPLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxtREFBbUQ7WUFDNUQsT0FBTyxFQUFFO2dCQUNMLHlDQUF5QztnQkFDekMsMkJBQTJCLEVBQUUsSUFBSTtnQkFDakMsNEJBQTRCLEVBQUUsSUFBSTtnQkFDbEMsNEJBQTRCLEVBQUUsSUFBSTtnQkFDbEMsU0FBUyxFQUFFLDZCQUE2QjtnQkFDeEMsVUFBVSxFQUFFLDRCQUE0QjtnQkFDeEMsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixtQkFBbUIsRUFBRSxJQUFJO2FBRTVCO1NBQ0osQ0FBQztJQUVGLGVBQWUsRUFBRTtRQUNiLFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLElBQUk7UUFDaEIsaUJBQWlCLEVBQUUsSUFBSTtLQUMxQjtJQUNELFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDWixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNyQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Q0FDSixDQUFDIn0=