const units = `[data-testid="units"]`;
const multiTabBtn = ".MuiButtonBase-root";
const pendingAnnouncementsName = '[class*="OwnerUnitCard_name"]';

export class UnitsPage {
  get unitsInDropDownMenu() {
    return cy.get(units);
  }

  get pendingAnnouncements() {
    return cy.get(multiTabBtn).contains("Очікуючі");
  }

  get firstPendingAnnouncementsName() {
    return cy.get(pendingAnnouncementsName).first();
  }

  clickPendingAnnouncements() {
    this.pendingAnnouncements.click();
  }

  clickUnitsInDropDownMenu() {
    this.unitsInDropDownMenu.click();
  }
}
