import { Given, When, Then } from "cucumber";
import { browser, protractor } from "protractor";
import { AngularHomePage } from "../Pageobjects/AngularHomePage.po"
import chai from "chai";
var expect = chai.expect;

let oahp = new AngularHomePage();
const EC = protractor.ExpectedConditions;

Given('I will be navigating to {string} application', async (string) => {
  await browser.get(string);
});

When('I click on latest angualr application link', async () => {
  await browser.wait(EC.elementToBeClickable(oahp.getLatestAngulaJsLink));
  await oahp.getLatestAngulaJsLink.click();

});

Then('Enter text on Search box {string}', async (string) => {
  await browser.wait(EC.elementToBeClickable(oahp.getSearchbox)).then(async function () {
    await oahp.getSearchbox.sendKeys(string);
  });

});


When('Click on Getting Started hyperlink', async () => {
  await browser.wait(EC.elementToBeClickable(oahp.getGettingStartedLink));
  await oahp.getGettingStartedLink.click();
});

Then('Validate Text as  {string}', async (string) => {
  await browser.wait(EC.elementToBeClickable(oahp.getWelcomeToAngularText)).then(async function () {
    await oahp.getWelcomeToAngularText.getText().then(async function (text) {
      await expect(text).to.equal(string);
    });
  });
});