"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
//require('jasmine-reporters');
exports.config = {
    // set to "custom" instead of cucumber.
    framework: 'custom',
    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    directConnect: true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //seleniumAddress:'http://hub.crossbrowsertesting.com:80/wd/hub',
    // change this to your USERNAME and AUTHKEY
    //seleniumAddress: 'http://mahesh.dindigala@jivainfotech.com:u915458c1f206e77@hub.crossbrowsertesting.com:80/wd/hub',
    //add more browsers to this array for more parllel tests!!
    // multiCapabilities: [
    //     {
    //     'name': 'Protractor Parallel Example',
    //     'browserName': 'Chrome',
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
    //     }
    // },
    // {
    //     'name': 'Protractor Parallel Example',
    //     'browserName': 'Firefox',
    //     'platform': 'Windows 10',
    //     record_video: true,
    //     record_network: false,
    //     record_snapshot: false,
    //     metadata: {
    //         browser: {
    //             name: 'Firefox'
    //         },
    //         device: 'Virtual Machine',
    //         platform: {
    //             name: 'Windows',
    //             version: '10'
    //         }
    //     }
    // },
    // {
    //     'name': 'Protractor Parallel Example',
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
    // ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9DdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2QztBQUM3QywrQkFBK0I7QUFDcEIsUUFBQSxNQUFNLEdBQVc7SUFDeEIsdUNBQXVDO0lBQ3ZDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxhQUFhLEVBQUUsSUFBSTtJQUNuQixrREFBa0Q7SUFFbEQsaUVBQWlFO0lBRWpFLDJDQUEyQztJQUMzQyxxSEFBcUg7SUFFckgsMERBQTBEO0lBQzFELHVCQUF1QjtJQUN2QixRQUFRO0lBQ1IsNkNBQTZDO0lBQzdDLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osUUFBUTtJQUNSLEtBQUs7SUFDTCxJQUFJO0lBQ0osNkNBQTZDO0lBQzdDLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osUUFBUTtJQUNSLEtBQUs7SUFDTCxJQUFJO0lBQ0osNkNBQTZDO0lBQzdDLDBDQUEwQztJQUMxQyxnQ0FBZ0M7SUFDaEMsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQix3Q0FBd0M7SUFDeEMsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxzQkFBc0I7SUFDdEIsK0JBQStCO0lBQy9CLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osU0FBUztJQUNULElBQUk7SUFDTCxLQUFLO0lBRUosS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUM7SUFDcEMsWUFBWSxFQUFFO1FBQ1YsTUFBTSxFQUFFLDRCQUE0QjtRQUNwQyxNQUFNLEVBQUUsSUFBSTtRQUNaLE9BQU8sRUFBRTtZQUNMLHdCQUF3QixDQUFDLGlCQUFpQjtTQUM3QztLQUNKO0lBQ0QsT0FBTyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsbURBQW1EO1lBQzVELE9BQU8sRUFBRTtnQkFDTCx5Q0FBeUM7Z0JBQ3pDLDJCQUEyQixFQUFFLElBQUk7Z0JBQ2pDLDRCQUE0QixFQUFFLElBQUk7Z0JBQ2xDLDRCQUE0QixFQUFFLElBQUk7Z0JBQ2xDLFNBQVMsRUFBRSw2QkFBNkI7Z0JBQ3hDLFVBQVUsRUFBRSw0QkFBNEI7Z0JBQ3hDLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsbUJBQW1CLEVBQUUsSUFBSTthQUU1QjtTQUNKLENBQUM7SUFFRixlQUFlLEVBQUU7UUFDYixTQUFTLEVBQUUsSUFBSTtRQUNmLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGlCQUFpQixFQUFFLElBQUk7S0FDMUI7SUFDRCxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ1osb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUl6QyxDQUFDO0NBQ0osQ0FBQyJ9