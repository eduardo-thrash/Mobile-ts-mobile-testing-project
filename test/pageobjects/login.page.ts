import { validate } from "../helpers/validationUtils";

class LoginPage {
  public get inputUsername() {
    return $("~input-email");
  }

  public get inputPassword() {
    return $("~input-password");
  }

  public get btnSubmit() {
    return $("~button-LOGIN");
  }

  public get alertTitle() {
    return $('*//android.widget.TextView[@resource-id="android:id/alertTitle"]');
  }

  public get alertMessage() {
    return $('*//android.widget.TextView[@resource-id="android:id/message"]');
  }

  public get alertClose() {
    return $('*//android.widget.Button[@text="OK"]');
  }

  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  public async validateLoginAlert() {
    const alertTitleText = await this.alertTitle.getAlertText();
    const alertMessageText = await this.alertMessage.getAlertText();
    const alertCloseText = await this.alertClose.getAlertText();

    const alertTitleExist = await this.alertTitle.waitForExist({ timeout: 5000, reverse: false, timeoutMsg: "No se encuentra la alerta de titulo", interval: 1000 });

    validate(alertTitleExist, true, "alert title found", "Element is not present");

    console.log(`Title => ${alertTitleText}`);
    console.log(`Message => ${alertMessageText}`);
    console.log(`Close => ${alertCloseText}`);

    await this.alertClose.click();
  }
}

export default new LoginPage();
