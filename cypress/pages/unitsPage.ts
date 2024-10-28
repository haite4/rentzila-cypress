class UnitsPage {
  get unitsInDropDownMenu() {
    return cy.get(`[data-testid="units"]`);
  }

  get pendingAnnouncements() {
    return cy.get(".MuiButtonBase-root").contains("Очікуючі");
  }

  get firstPendingAnnouncementsName() {
    return cy.get('[class*="OwnerUnitCard_name"]').first();
  }

  clickPendingAnnouncements() {
    this.pendingAnnouncements.click();
  }

  clickUnitsInDropDownMenu() {
    this.unitsInDropDownMenu.click();
  }
}

export default new UnitsPage();
