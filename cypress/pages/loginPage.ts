const loginPasswordInput = "#password";
const loginEmailInput = "#email";
const submitBtn = 'button[class*="ItemButtons_darkBlueRoundBtn"]';
const headerAuthBtn = '[class*="NavbarAuthBlock_buttonEnter"]';
const userIcon = `[data-testid="avatarBlock"]`;
const profileDropdownEmail = '[class*="ProfileDropdownMenu_email"]';

export class LoginPage {
  get loginPasswordInput() {
    return cy.get(loginPasswordInput);
  }

  get loginEmailInput() {
    return cy.get(loginEmailInput);
  }

  get submitBtn() {
    return cy.get(submitBtn).contains("Увійти");
  }

  get headerAuthBtn() {
    return cy.get(headerAuthBtn);
  }

  get userIcon() {
    return cy.get(userIcon);
  }

  get profileDropdownEmail() {
    return cy.get(profileDropdownEmail);
  }

  fillLoginPasswordInput(password: string) {
    this.loginPasswordInput.type(password);
  }

  fillLoginEmailInput(email: string) {
    this.loginEmailInput.type(email);
  }

  clickLoginSubmitBtn() {
    this.submitBtn.click();
  }

  clickHeaderAuthBtn() {
    this.headerAuthBtn.click();
  }

  clickAvatarBlock() {
    this.userIcon.click();
  }

  getProfileDropdownEmailText() {
    return this.profileDropdownEmail;
  }

  login(email: string, password: string) {
    this.fillLoginEmailInput(email);
    this.fillLoginPasswordInput(password);
    this.clickLoginSubmitBtn();
  }
}
