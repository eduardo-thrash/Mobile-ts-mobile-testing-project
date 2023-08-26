import { wait } from "../helpers/wait";
import LoginPage from "../pageobjects/login.page";
import MainPage from "../pageobjects/main.page";

describe("WEBDRIVER I/O | Main Page", () => {
  before(async function () {
    console.log("inicio test");
  });

  it("should login with valid credentials", async () => {
    await (await MainPage.loginBtn).click();

    await LoginPage.login("tomsmith@mail.com", "SuperSecretPassword!");

    wait(2000);

    await LoginPage.validateLoginAlert();

    console.log("Success Test!!!");

    wait(2000);
  });

  it("should login with valid credentials copy", async () => {
    console.log("Ejecuión test");
  });

  after(async function () {
    console.log("fin test");
  });
});
