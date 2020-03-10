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
            browserName: 'chrome',
            browser_api_name: process.env.CBT_BROWSER,
            platform: process.env.CBT_OPERATING_SYSTEM,
            screen_resolution: process.env.CBT_RESOLUTION,
            record_video: true,
            record_network: true,
        },
        {
            name: process.env.CBT_BUILD_NAME,
            browserName: 'firefox',
            browser_api_name: process.env.CBT_BROWSER,
            platform: process.env.CBT_OPERATING_SYSTEM,
            screen_resolution: process.env.CBT_RESOLUTION,
            record_video: true,
            record_network: true,
        }
        //  {
        //     'name': 'CrossBrowserTesting',
        //     'browserName': 'chrome',
        //     'platform': 'Windows 10',
        //     record_video: true,
        //     record_network: false,
        //     record_snapshot: false,
        //     metadata: {
        //         browser: {
        //             name: 'chrome'
        //         },
        //         device: 'Virtual Machine',
        //         platform: {
        //             name: 'Windows',
        //             version: '10'
        //         }
        //     },
        // },        
        // {
        //     'name': 'CrossBrowserTesting',
        //     'browserName': 'internet explorer',
        //     'platform': 'Windows 10',
        //     record_video: true,
        //     record_network: false,
        //     record_snapshot: false,
        //     metadata: {
        //         browser: {
        //             name: 'internet explorer'
        //         },
        //         device: 'Virtual Machine',
        //         platform: {
        //             name: 'Windows',
        //             version: '10'
        //         }
        //     },
        // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9DdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2QztBQUU3QywrQkFBK0I7QUFDcEIsUUFBQSxNQUFNLEdBQVc7SUFDeEIsdUNBQXVDO0lBQ3ZDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxzQkFBc0I7SUFDdEIsa0RBQWtEO0lBRWxELHFFQUFxRTtJQUNyRSwyQ0FBMkM7SUFDM0MsZUFBZSxFQUFFLGlHQUFpRztJQUVsSCwwREFBMEQ7SUFDMUQsaUJBQWlCLEVBQUU7UUFDZjtZQUNJLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7WUFDaEMsV0FBVyxFQUFFLFFBQVE7WUFDckIsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXO1lBQ3pDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQjtZQUMxQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsY0FBYyxFQUFFLElBQUk7U0FDdkI7UUFDRDtZQUNJLElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7WUFDaEMsV0FBVyxFQUFFLFNBQVM7WUFDdEIsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXO1lBQ3pDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQjtZQUMxQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWM7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsY0FBYyxFQUFFLElBQUk7U0FDdkI7UUFFRCxLQUFLO1FBQ0wscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUMvQixnQ0FBZ0M7UUFDaEMsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3Qiw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQiw2QkFBNkI7UUFDN0IsYUFBYTtRQUNiLHFDQUFxQztRQUNyQyxzQkFBc0I7UUFDdEIsK0JBQStCO1FBQy9CLDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osU0FBUztRQUNULGFBQWE7UUFDYixJQUFJO1FBQ0oscUNBQXFDO1FBQ3JDLDBDQUEwQztRQUMxQyxnQ0FBZ0M7UUFDaEMsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3Qiw4QkFBOEI7UUFDOUIsa0JBQWtCO1FBQ2xCLHFCQUFxQjtRQUNyQix3Q0FBd0M7UUFDeEMsYUFBYTtRQUNiLHFDQUFxQztRQUNyQyxzQkFBc0I7UUFDdEIsK0JBQStCO1FBQy9CLDRCQUE0QjtRQUM1QixZQUFZO1FBQ1osU0FBUztRQUNULElBQUk7S0FDUDtJQUVELEtBQUssRUFBRSxDQUFDLDJCQUEyQixDQUFDO0lBQ3BDLFlBQVksRUFBRTtRQUNWLE1BQU0sRUFBRSw0QkFBNEI7UUFDcEMsTUFBTSxFQUFFLElBQUk7UUFDWixPQUFPLEVBQUU7WUFDTCx3QkFBd0IsQ0FBQyxpQkFBaUI7U0FDN0M7S0FDSjtJQUNELE9BQU8sRUFBRSxDQUFDO1lBQ04sT0FBTyxFQUFFLG1EQUFtRDtZQUM1RCxPQUFPLEVBQUU7Z0JBQ0wseUNBQXlDO2dCQUN6QywyQkFBMkIsRUFBRSxJQUFJO2dCQUNqQyw0QkFBNEIsRUFBRSxJQUFJO2dCQUNsQyw0QkFBNEIsRUFBRSxJQUFJO2dCQUNsQyxTQUFTLEVBQUUsNkJBQTZCO2dCQUN4QyxVQUFVLEVBQUUsNEJBQTRCO2dCQUN4QyxlQUFlLEVBQUUsSUFBSTtnQkFDckIsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLG1CQUFtQixFQUFFLElBQUk7YUFFNUI7U0FDSixDQUFDO0lBRUYsZUFBZSxFQUFFO1FBQ2IsU0FBUyxFQUFFLElBQUk7UUFDZixVQUFVLEVBQUUsSUFBSTtRQUNoQixpQkFBaUIsRUFBRSxJQUFJO0tBQzFCO0lBQ0QsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNaLG9CQUFPLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDO1FBQ3JDLG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDekMsQ0FBQztDQUNKLENBQUMifQ==