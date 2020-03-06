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
            'browserName': 'chrome',
            'platform': 'Windows 10',
            record_video: true,
            record_network: false,
            record_snapshot: false,
            metadata: {
                browser: {
                    name: 'chrome'
                },
                device: 'Virtual Machine',
                platform: {
                    name: 'Windows',
                    version: '10'
                }
            },
        },
        {
            'name': 'CrossBrowserTesting POC',
            'browserName': 'internet explorer',
            'platform': 'Windows 10',
            record_video: true,
            record_network: false,
            record_snapshot: false,
            metadata: {
                browser: {
                    name: 'internet explorer'
                },
                device: 'Virtual Machine',
                platform: {
                    name: 'Windows',
                    version: '10'
                }
            },
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9DdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2QztBQUU3QywrQkFBK0I7QUFDcEIsUUFBQSxNQUFNLEdBQVc7SUFDeEIsdUNBQXVDO0lBQ3ZDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxzQkFBc0I7SUFDdEIsa0RBQWtEO0lBRWxELHFFQUFxRTtJQUNyRSwyQ0FBMkM7SUFDM0MsZUFBZSxFQUFFLGlHQUFpRztJQUVsSCwwREFBMEQ7SUFDM0QsaUJBQWlCLEVBQUU7UUFDYjtZQUNHLE1BQU0sRUFBRSx5QkFBeUI7WUFDakMsYUFBYSxFQUFFLFFBQVE7WUFDdkIsVUFBVSxFQUFFLFlBQVk7WUFDeEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsY0FBYyxFQUFFLEtBQUs7WUFDckIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsUUFBUSxFQUFFO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxJQUFJLEVBQUUsUUFBUTtpQkFDakI7Z0JBQ0QsTUFBTSxFQUFFLGlCQUFpQjtnQkFDekIsUUFBUSxFQUFFO29CQUNOLElBQUksRUFBRSxTQUFTO29CQUNmLE9BQU8sRUFBRSxJQUFJO2lCQUNoQjthQUNKO1NBQ0o7UUFDRDtZQUNJLE1BQU0sRUFBRSx5QkFBeUI7WUFDakMsYUFBYSxFQUFFLG1CQUFtQjtZQUNsQyxVQUFVLEVBQUUsWUFBWTtZQUN4QixZQUFZLEVBQUUsSUFBSTtZQUNsQixjQUFjLEVBQUUsS0FBSztZQUNyQixlQUFlLEVBQUUsS0FBSztZQUN0QixRQUFRLEVBQUU7Z0JBQ04sT0FBTyxFQUFFO29CQUNMLElBQUksRUFBRSxtQkFBbUI7aUJBQzVCO2dCQUNELE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCLFFBQVEsRUFBRTtvQkFDTixJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsSUFBSTtpQkFDaEI7YUFDSjtTQUNKO0tBQ0o7SUFFRCxLQUFLLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztJQUNwQyxZQUFZLEVBQUU7UUFDVixNQUFNLEVBQUUsNEJBQTRCO1FBQ3BDLE1BQU0sRUFBRSxJQUFJO1FBQ1osT0FBTyxFQUFFO1lBQ0wsd0JBQXdCLENBQUMsaUJBQWlCO1NBQzdDO0tBQ0o7SUFDRCxPQUFPLEVBQUUsQ0FBQztZQUNOLE9BQU8sRUFBRSxtREFBbUQ7WUFDNUQsT0FBTyxFQUFFO2dCQUNMLHlDQUF5QztnQkFDekMsMkJBQTJCLEVBQUUsSUFBSTtnQkFDakMsNEJBQTRCLEVBQUUsSUFBSTtnQkFDbEMsNEJBQTRCLEVBQUUsSUFBSTtnQkFDbEMsU0FBUyxFQUFFLDZCQUE2QjtnQkFDeEMsVUFBVSxFQUFFLDRCQUE0QjtnQkFDeEMsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixtQkFBbUIsRUFBRSxJQUFJO2FBRTVCO1NBQ0osQ0FBQztJQUVGLGVBQWUsRUFBRTtRQUNiLFNBQVMsRUFBRSxJQUFJO1FBQ2YsVUFBVSxFQUFFLElBQUk7UUFDaEIsaUJBQWlCLEVBQUUsSUFBSTtLQUMxQjtJQUNELFNBQVMsRUFBRSxHQUFHLEVBQUU7UUFDWixvQkFBTyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQztRQUNyQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pDLENBQUM7Q0FDSixDQUFDIn0=