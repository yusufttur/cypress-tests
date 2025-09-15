describe('Dynamic Loading', () => {
  it('should wait for Hello World!', () => {
    cy.navigateToTask('dynamic_loading/2');
    cy.get('#start button').click();
    cy.contains('#finish h4', 'Hello World!', { timeout: 5000 }).should(
      'be.visible'
    );
  });
});
