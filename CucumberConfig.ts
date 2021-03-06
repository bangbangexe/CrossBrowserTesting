import { Config, browser } from 'protractor';

//require('jasmine-reporters');
export let config: Config = {
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
    capabilities:{
        name: process.env.CBT_BUILD_NAME,
        browserName: 'chrome',
        browser_api_name: process.env.CBT_BROWSER,
        os_api_name: process.env.CBT_OPERATING_SYSTEM,
        screen_resolution: process.env.CBT_RESOLUTION,
        record_video: true,
        record_network: true,
    },
    //multiCapabilities: [
        // {
        //     name: process.env.CBT_BUILD_NAME,
        //     browser_api_name: process.env.CBT_BROWSER,
        //     os_api_name: process.env.CBT_OPERATING_SYSTEM,
        //     screen_resolution: process.env.CBT_RESOLUTION,
        //     record_video: true,
        //     record_network: true,
        // },
        // {
        //     name: process.env.CBT_BUILD_NAME,
        //     browserName: 'firefox',
        //     browser_api_name: process.env.CBT_BROWSER,
        //     platform: process.env.CBT_OPERATING_SYSTEM,
        //     screen_resolution: process.env.CBT_RESOLUTION,
        //     record_video: true,
        //     record_network: true,
        // }

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
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
    },
};