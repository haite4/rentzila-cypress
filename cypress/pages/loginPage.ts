class LoginPage {
  get loginPasswordInput() {
    return cy.get("#password");
  }

  get loginEmailInput() {
    return cy.get("#email");
  }

  get submitBtn() {
    return cy
      .get('button[class*="ItemButtons_darkBlueRoundBtn"]')
      .contains("Увійти");
  }

  get headerAuthBtn() {
    return cy.get('[class*="NavbarAuthBlock_buttonEnter"]');
  }

  get userIcon() {
    return cy.get(`[data-testid="avatarBlock"]`);
  }

  get profileDropdownEmail() {
    return cy.get('[class*="ProfileDropdownMenu_email"]');
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

export default new LoginPage();
