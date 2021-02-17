import { browser, by, element, ExpectedConditions } from 'protractor';

describe('Test strony logowania', () => {
    it('Strona powinna zawieraæ wszystkie niezbêdne elementy i zalogowanie', () => {
        browser.get('https://elcodigo.pl/strona-kurs-protractor');
        expect(element(by.id('pglogo')).isDisplayed()).toBeTruthy();
        element(by.name('login')).sendKeys('admin');
        element(by.name('pass')).sendKeys('secret');
        element(by.xpath('//button[@type="submit"]')).click();

        const loginHolder = element(by.id('login-holder'));
        browser.wait(ExpectedConditions.visibilityOf(loginHolder));
        browser.wait(ExpectedConditions.visibilityOf(loginHolder));
        loginHolder.getText().then((text) => {
            expect(text).toEqual('admin');
        });
    });
});
/*
describe('Test strony logowania', () => {
    it('Strona powinna zawieraæ wszystkie niezbêdne elementy', () => {
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
        element(by.xpath('//button[@color="primary"]')).click();
    });
});*/

describe('Test strony Angular', () => {
    it('Strona powinna wyœwietlaæ logo', () => {
        browser.get('https://angular.io/');
        expect(element(by.css('.hero-logo')).isDisplayed()).toBeTruthy(); //class
        expect(element(by.css('img[alt="Angular"]')).isDisplayed()).toBeTruthy();
    });
});