describe('File Upload', () => {
  it('should upload file', () => {
    cy.navigateToTask('upload');
    cy.get('input[type="file"]')
      .first()
      .selectFile('./cypress/fixtures/cypress.png');
    cy.contains('input', 'Upload').click();
    cy.contains('#uploaded-files', 'cypress.png').should('be.visible');
  });
});
