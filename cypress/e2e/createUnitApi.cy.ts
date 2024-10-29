import unitApi from "../api/unitApi";
import loginPage from "../pages/loginPage";
import unitsPage  from "../pages/unitsPage";

describe("Login functionality", () => {
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

  it('Verify that unit images uploaded', () => {
    unitApi.createUnitImages(unitId).then((status) => {
      expect(status).to.eq(201)
    })
  })

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
