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
        // {
        //     name : process.env.CBT_BUILD_NAME,
        //     browserName: 'chrome',
        //     browser_api_name: process.env.CBT_BROWSER,
        //     platform: process.env.CBT_OPERATING_SYSTEM,
        //     screen_resolution: process.env.CBT_RESOLUTION,
        //     record_video : true,
        //     record_network : true,
        // },
        // {
        //     name : process.env.CBT_BUILD_NAME,
        //     browserName: 'firefox',
        //     browser_api_name: process.env.CBT_BROWSER,
        //     platform: process.env.CBT_OPERATING_SYSTEM,
        //     screen_resolution: process.env.CBT_RESOLUTION,
        //     record_video : true,
        //     record_network : true,
        // }
        {
            'name': 'CrossBrowserTesting',
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
            'name': 'CrossBrowserTesting',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VjdW1iZXJDb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9DdWN1bWJlckNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUE2QztBQUU3QywrQkFBK0I7QUFDcEIsUUFBQSxNQUFNLEdBQVc7SUFDeEIsdUNBQXVDO0lBQ3ZDLFNBQVMsRUFBRSxRQUFRO0lBQ25CLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUMvRCxzQkFBc0I7SUFDdEIsa0RBQWtEO0lBRWxELHFFQUFxRTtJQUNyRSwyQ0FBMkM7SUFDM0MsZUFBZSxFQUFFLGlHQUFpRztJQUVsSCwwREFBMEQ7SUFDM0QsaUJBQWlCLEVBQUU7UUFDbEIsSUFBSTtRQUNKLHlDQUF5QztRQUN6Qyw2QkFBNkI7UUFDN0IsaURBQWlEO1FBQ2pELGtEQUFrRDtRQUNsRCxxREFBcUQ7UUFDckQsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3QixLQUFLO1FBQ0wsSUFBSTtRQUNKLHlDQUF5QztRQUN6Qyw4QkFBOEI7UUFDOUIsaURBQWlEO1FBQ2pELGtEQUFrRDtRQUNsRCxxREFBcUQ7UUFDckQsMkJBQTJCO1FBQzNCLDZCQUE2QjtRQUM3QixJQUFJO1FBRUM7WUFDRyxNQUFNLEVBQUUscUJBQXFCO1lBQzdCLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLGVBQWUsRUFBRSxLQUFLO1lBQ3RCLFFBQVEsRUFBRTtnQkFDTixPQUFPLEVBQUU7b0JBQ0wsSUFBSSxFQUFFLFFBQVE7aUJBQ2pCO2dCQUNELE1BQU0sRUFBRSxpQkFBaUI7Z0JBQ3pCLFFBQVEsRUFBRTtvQkFDTixJQUFJLEVBQUUsU0FBUztvQkFDZixPQUFPLEVBQUUsSUFBSTtpQkFDaEI7YUFDSjtTQUNKO1FBQ0Q7WUFDSSxNQUFNLEVBQUUscUJBQXFCO1lBQzdCLGFBQWEsRUFBRSxtQkFBbUI7WUFDbEMsVUFBVSxFQUFFLFlBQVk7WUFDeEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsY0FBYyxFQUFFLEtBQUs7WUFDckIsZUFBZSxFQUFFLEtBQUs7WUFDdEIsUUFBUSxFQUFFO2dCQUNOLE9BQU8sRUFBRTtvQkFDTCxJQUFJLEVBQUUsbUJBQW1CO2lCQUM1QjtnQkFDRCxNQUFNLEVBQUUsaUJBQWlCO2dCQUN6QixRQUFRLEVBQUU7b0JBQ04sSUFBSSxFQUFFLFNBQVM7b0JBQ2YsT0FBTyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0o7U0FDSjtLQUNKO0lBRUQsS0FBSyxFQUFFLENBQUMsMkJBQTJCLENBQUM7SUFDcEMsWUFBWSxFQUFFO1FBQ1YsTUFBTSxFQUFFLDRCQUE0QjtRQUNwQyxNQUFNLEVBQUUsSUFBSTtRQUNaLE9BQU8sRUFBRTtZQUNMLHdCQUF3QixDQUFDLGlCQUFpQjtTQUM3QztLQUNKO0lBQ0QsT0FBTyxFQUFFLENBQUM7WUFDTixPQUFPLEVBQUUsbURBQW1EO1lBQzVELE9BQU8sRUFBRTtnQkFDTCx5Q0FBeUM7Z0JBQ3pDLDJCQUEyQixFQUFFLElBQUk7Z0JBQ2pDLDRCQUE0QixFQUFFLElBQUk7Z0JBQ2xDLDRCQUE0QixFQUFFLElBQUk7Z0JBQ2xDLFNBQVMsRUFBRSw2QkFBNkI7Z0JBQ3hDLFVBQVUsRUFBRSw0QkFBNEI7Z0JBQ3hDLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixZQUFZLEVBQUUsSUFBSTtnQkFDbEIsbUJBQW1CLEVBQUUsSUFBSTthQUU1QjtTQUNKLENBQUM7SUFFRixlQUFlLEVBQUU7UUFDYixTQUFTLEVBQUUsSUFBSTtRQUNmLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLGlCQUFpQixFQUFFLElBQUk7S0FDMUI7SUFDRCxTQUFTLEVBQUUsR0FBRyxFQUFFO1FBQ1osb0JBQU8sQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0NBQ0osQ0FBQyJ9