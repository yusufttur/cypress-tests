describe('Dynamic Controls', () => {
  it('should validate enable & disable', () => {
    cy.navigateToTask('dynamic_controls');
    cy.contains('button', 'Enable').click();
    cy.get('input[type="text"]').should('be.enabled').type('Hello World!');
    cy.contains('button', 'Disable').click();
    cy.get('input[type="text"]').should('be.disabled');
  });
});
