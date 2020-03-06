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
    // multiCapabilities: [
    //     {
    //         'name': 'CrossBrowserTesting POC',
    //         'browserName':'',
    //         // 'browserName': 'Chrome',
    //         // 'platform': 'Windows 10',
    //         record_video: true,
    //         record_network: false,
    //         record_snapshot: false,
    //         // metadata: {
    //         //     browser: {
    //         //         name: 'chrome'
    //         //     },
    //         //     device: 'Virtual Machine',
    //         //     platform: {
    //         //         name: 'Windows',
    //         //         version: '10'
    //         //     }
    //         // }
    //     },
    //     {
    //         'name': 'CrossBrowserTesting POC',
    //         'browserName':'CBT_BROWSERNAME',
    //         // 'browserName': 'Firefox',
    //         // 'platform': 'Windows 10',
    //         record_video: true,
    //         record_network: false,
    //         record_snapshot: false,
    //         // metadata: {
    //         //     browser: {
    //         //         name: 'Firefox'
    //         //     },
    //         //     device: 'Virtual Machine',
    //         //     platform: {
    //         //         name: 'Windows',
    //         //         version: '10'
    //         //     }
    //         // }
    //     },
    //     // {
    //     //     'name': 'CrossBrowserTesting POC',
    //     //     CBT_BROWSERNAME: '',
    //     //     'browserName': 'internet explorer',
    //     //     'platform': 'Windows 10',
    //     //     record_video: true,
    //     //     record_network: false,
    //     //     record_snapshot: false,
    //     //     metadata: {
    //     //         browser: {
    //     //             name: 'internet explorer'
    //     //         },
    //     //         device: 'Virtual Machine',
    //     //         platform: {
    //     //             name: 'Windows',
    //     //             version: '10'
    //     //         }
    //     //     },
    //     // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9DdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2QztBQUU3QywrQkFBK0I7QUFDcEIsUUFBQSxNQUFNLEdBQVc7SUFDeEIsdUNBQXVDO0lBQ3ZDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxzQkFBc0I7SUFDdEIsa0RBQWtEO0lBRWxELHFFQUFxRTtJQUNyRSwyQ0FBMkM7SUFDM0MsZUFBZSxFQUFFLGlHQUFpRztJQUVsSCwwREFBMEQ7SUFDM0QsdUJBQXVCO0lBQ3RCLFFBQVE7SUFDUiw2Q0FBNkM7SUFDN0MsNEJBQTRCO0lBQzVCLHNDQUFzQztJQUN0Qyx1Q0FBdUM7SUFDdkMsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixvQ0FBb0M7SUFDcEMsb0JBQW9CO0lBQ3BCLDRDQUE0QztJQUM1Qyw2QkFBNkI7SUFDN0Isc0NBQXNDO0lBQ3RDLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7SUFFVCxRQUFRO0lBQ1IsNkNBQTZDO0lBQzdDLDJDQUEyQztJQUMzQyx1Q0FBdUM7SUFDdkMsdUNBQXVDO0lBQ3ZDLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIscUNBQXFDO0lBQ3JDLG9CQUFvQjtJQUNwQiw0Q0FBNEM7SUFDNUMsNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLGdEQUFnRDtJQUNoRCxrQ0FBa0M7SUFDbEMsaURBQWlEO0lBQ2pELHVDQUF1QztJQUN2QyxpQ0FBaUM7SUFDakMsb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLCtDQUErQztJQUMvQyxvQkFBb0I7SUFDcEIsNENBQTRDO0lBQzVDLDZCQUE2QjtJQUM3QixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLEtBQUs7SUFFTCxLQUFLLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztJQUNwQyxZQUFZLEVBQUU7UUFDVixNQUFNLEVBQUUsNEJBQTRCO1FBQ3BDLE1BQU0sRUFBRSxJQUFJO1FBQ1osT0FBTyxFQUFFO1lBQ0wsd0JBQXdCLENBQUMsaUJBQWlCO1NBQzdDO0tBQ0o7SUFDRCxPQUFPLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxtREFBbUQ7WUFDNUQsT0FBTyxFQUFFO2dCQUNMLHlDQUF5QztnQkFDekMsMkJBQTJCLEVBQUUsSUFBSTtnQkFDakMsNEJBQTRCLEVBQUUsSUFBSTtnQkFDbEMsNEJBQTRCLEVBQUUsSUFBSTtnQkFDbEMsU0FBUyxFQUFFLDZCQUE2QjtnQkFDeEMsVUFBVSxFQUFFLDRCQUE0QjtnQkFDeEMsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixtQkFBbUIsRUFBRSxJQUFJO2FBRTVCO1NBQ0osQ0FBQztJQUVGLGVBQWUsRUFBRTtRQUNiLFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLElBQUk7UUFDaEIsaUJBQWlCLEVBQUUsSUFBSTtLQUMxQjtJQUNELFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDWixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNyQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Q0FDSixDQUFDIn0=