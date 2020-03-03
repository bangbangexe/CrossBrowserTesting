
import { After, Before, Status,BeforeAll, AfterAll } from "cucumber"
import { browser } from "protractor";
const fs = require('fs-extra')





// Before({ tags: "@AngularWelcome" }, function () {
//     // This hook will be executed before scenarios tagged with @AngularWelcome
//     console.log("Welcome...");

// });
After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        // console.log('Scenario:', scenario.sourceLocation.uri);
        const screenshot = await browser.takeScreenshot()
        this.attach(screenshot, "image/png")
    }
});

// Asynchronous Promise
After(async function () {
    // Assuming this.driver is a selenium webdriver
    //await this.window.close();
});
// AfterAll(async function () {
//     // This hook will be executed after all scenarios
//      //browser.manage().window().maximize();
//     await fs.remove('./json-output-folder')
//          .then(() => {
//              console.log('success!')
//          })
//          .catch(err => {
//              console.error(err)
//          })
//          return Promise.resolve()
//  });
