/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    public get loginBtn () {
        return $('~Login');
    }

    public get inputUsername () {
        return $('~input-email');
    }

    public get inputPassword () {
        return $('~input-password');
    }

    public get btnSubmit () {
        return $('~button-LOGIN');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
