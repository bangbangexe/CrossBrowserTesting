import { ElementFinder, element, by } from "protractor";

export class AngularHomePage {

    getLatestAngulaJsLink:ElementFinder;
    getSearchbox: ElementFinder;
    getGettingStartedLink:ElementFinder
    getWelcomeToAngularText:ElementFinder

    constructor() {
        this.getLatestAngulaJsLink=element(by.xpath('//a[text()="angular.io"]'));
        this.getSearchbox = element(by.xpath('//input[@type="search"]'));
        this.getGettingStartedLink=element(by.xpath('//a[text()="Get Started"]'));
        this.getWelcomeToAngularText=element(by.xpath('//p[text()="Welcome to Angular!"]'))


    }
}