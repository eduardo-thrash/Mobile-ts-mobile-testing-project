import loginPage from '../pageobjects/login.page';
import LoginPage from  '../pageobjects/login.page';
import Page from '../pageobjects/page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        //await browser.debug();
        await (await LoginPage.loginBtn).click();
        await LoginPage.login('tomsmith@mail.com', 'SuperSecretPassword!');
    });
});

