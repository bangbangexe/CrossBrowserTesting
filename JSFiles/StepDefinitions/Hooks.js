"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const fs = require('fs-extra');
// Before({ tags: "@AngularWelcome" }, function () {
//     // This hook will be executed before scenarios tagged with @AngularWelcome
//     console.log("Welcome...");
// });
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            // console.log('Scenario:', scenario.sourceLocation.uri);
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
// Asynchronous Promise
cucumber_1.After(function () {
    return __awaiter(this, void 0, void 0, function* () {
        // Assuming this.driver is a selenium webdriver
        //await this.window.close();
    });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvSG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBb0U7QUFDcEUsMkNBQXFDO0FBQ3JDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQU05QixvREFBb0Q7QUFDcEQsaUZBQWlGO0FBQ2pGLGlDQUFpQztBQUVqQyxNQUFNO0FBQ04sZ0JBQUssQ0FBQyxVQUFnQixRQUFROztRQUMxQixJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLGlCQUFNLENBQUMsTUFBTSxFQUFFO1lBQzFDLHlEQUF5RDtZQUN6RCxNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUE7U0FDdkM7SUFDTCxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBRUgsdUJBQXVCO0FBQ3ZCLGdCQUFLLENBQUM7O1FBQ0YsK0NBQStDO1FBQy9DLDRCQUE0QjtJQUNoQyxDQUFDO0NBQUEsQ0FBQyxDQUFDO0FBQ0gsK0JBQStCO0FBQy9CLHdEQUF3RDtBQUN4RCwrQ0FBK0M7QUFDL0MsOENBQThDO0FBQzlDLHlCQUF5QjtBQUN6Qix1Q0FBdUM7QUFDdkMsY0FBYztBQUNkLDJCQUEyQjtBQUMzQixrQ0FBa0M7QUFDbEMsY0FBYztBQUNkLG9DQUFvQztBQUNwQyxPQUFPIn0=