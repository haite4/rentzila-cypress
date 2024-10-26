import { UnitApi } from "../api/unit.api";
import { LoginPage } from "../pages/loginPage";
import { UnitsPage } from "../pages/unitsPage";

describe("Login functionality", () => {
  const loginPage = new LoginPage();
  const unitApi = new UnitApi();
  const unitsPage = new UnitsPage();
  let unitId: number;
  let unitName: string;

  beforeEach("Navigate to the login page", () => {
    cy.visit("/");
    loginPage.clickHeaderAuthBtn();
    loginPage.login(Cypress.env("USER_EMAIL"), Cypress.env("USER_PASSWORD"));
  });

  it('Verify that unit displayed in "Очікуючі" tab', () => {
    unitApi.createUnit().then((data) => {
      unitId = data.id;
      unitName = data.name;
      loginPage.clickAvatarBlock();
      unitsPage.clickUnitsInDropDownMenu();
      unitsPage.clickPendingAnnouncements();
      unitsPage.firstPendingAnnouncementsName.should("have.text", unitName);
    });
  });

  it('Verify that unit removed from "Очікуючі" tab', () => {
    unitApi.deleteUnit(unitId).then((status) => {
      loginPage.clickAvatarBlock();
      unitsPage.clickUnitsInDropDownMenu();
      unitsPage.clickPendingAnnouncements();
      unitsPage.firstPendingAnnouncementsName.should("not.have.text", unitName);
      expect(status).to.eq(204);
    });
  });
});
