import { Given, When, Then } from "cucumber";
import { browser, protractor } from "protractor";
import { RobertaLogin } from "../Pageobjects/RobertaLogin.po";
import chai from "chai";
var expect = chai.expect;
let RL = new RobertaLogin();
const EC = protractor.ExpectedConditions;

Given('I will be navigating to Robertas {string} application', async (string)=> {
    await browser.get(string);
    await browser.wait(EC.elementToBeClickable(RL.getNewsLetterCloseButton));
    await RL.getNewsLetterCloseButton.click();
});

When('I click on SignIn link', async ()=> {
    await browser.wait(EC.elementToBeClickable(RL.getSignInLink));
    await RL.getSignInLink.click();
});
When('Enter User name as {string}', async (string)=> {
    await browser.wait(EC.elementToBeClickable(RL.getEmail));
    await RL.getEmail.sendKeys(string);
});
When('Enter password as {string}', async (string)=> {
    await browser.wait(EC.elementToBeClickable(RL.getPassword));
    await RL.getPassword.sendKeys(string);
});
When('Click on SignIn Button', async ()=> {
    await browser.wait(EC.elementToBeClickable(RL.getSignInButton));
    await RL.getSignInButton.click();
});
Then('Validate My Account text as {string}', async (string) => {
    await browser.wait(EC.elementToBeClickable(RL.getMyAccountText)).then(async function() {
      await RL.getMyAccountText.getText().then(async function (text) {
        await expect(text).to.equal(string);
      });
    });
  });