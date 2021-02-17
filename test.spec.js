"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
describe('Test strony logowania', function () {
    it('Strona powinna zawierać wszystkie niezbędne elementy i zalogowanie', function () {
        protractor_1.browser.get('https://elcodigo.pl/strona-kurs-protractor');
        expect(protractor_1.element(protractor_1.by.id('pglogo')).isDisplayed()).toBeTruthy();
        protractor_1.element(protractor_1.by.name('login')).sendKeys('admin');
        protractor_1.element(protractor_1.by.name('pass')).sendKeys('secret');
        protractor_1.element(protractor_1.by.xpath('//input[@type="password"]')).sendKeys('admin');
        protractor_1.element(protractor_1.by.xpath('//button[@color = "primary"]')).click();
        var loginHolder = protractor_1.element(protractor_1.by.id('login-holder'));
        protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(loginHolder));
        loginHolder.getText().then(function (text) {
            expect(text).toEqual('admin');
        });
    });
});
/*
describe('Test strony logowania', () => {
    it('Strona powinna zawierać wszystkie niezbędne elementy', () => {
        browser.get('https://elcodigo.pl/strona-kurs-protractor');
        expect(element(by.id('pglogo')).isDisplayed()).toBeTruthy();
        expect(element(by.css('#pglogo')).isDisplayed()).toBeTruthy(); //id
        expect(element(by.css('.margins')).isDisplayed()).toBeTruthy(); //class
        expect(element(by.css('img')).isDisplayed()).toBeTruthy(); //tagname
        element(by.name('login')).sendKeys('admin');
        element(by.id('mat-input-0')).sendKeys('admin');
        element(by.css('input[placeholder="Login"]')).sendKeys('admin');
        element(by.xpath('//input[@placeholder="Login"]')).sendKeys('admin');
        element(by.name('pass')).sendKeys('secret');
        element(by.id('mat-input-1')).sendKeys('admin');
        element(by.css('input[type="password"]')).sendKeys('admin');
        element(by.xpath('//input[@type="password"]')).sendKeys('admin');
        element(by.xpath('//button[@color = "primary"]')).click();
    });
});*/
describe('Test strony Angular', function () {
    it('Strona powinna wyświetlać logo', function () {
        protractor_1.browser.get('https://angular.io/');
        expect(protractor_1.element(protractor_1.by.css('.hero-logo')).isDisplayed()).toBeTruthy(); //class
        expect(protractor_1.element(protractor_1.by.css('img[alt="Angular"]')).isDisplayed()).toBeTruthy();
    });
});
//# sourceMappingURL=test.spect.js.map