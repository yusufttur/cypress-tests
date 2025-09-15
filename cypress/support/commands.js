// Visit a task page by URL and verify navigation
Cypress.Commands.add('navigateToTask', (url) => {
  cy.visit(`/${url}`);
  cy.url().should('contain', url);
});

// Click a header by its visible text
Cypress.Commands.add('clickTableHeader', (tableSelector, headerText) => {
  cy.contains(`${tableSelector} thead th`, headerText).click();
});

// Get the index of a column by its header text
Cypress.Commands.add('getTableColumnIndex', (tableSelector, headerText) => {
  cy.get(`${tableSelector} thead th`).then(($ths) => {
    const index = $ths.toArray().findIndex((th) => th.innerText === headerText);
    expect(index, `${headerText} column exists`).to.exist;
    return cy.wrap(index + 1); // return 1-based index for nth-child
  });
});

// Get all cell values for a given column by header text
Cypress.Commands.add('getTableColumnValues', (tableSelector, headerText) => {
  cy.getTableColumnIndex(tableSelector, headerText).then((colIdx) => {
    cy.get(`${tableSelector} tbody tr td:nth-child(${colIdx})`).then(
      ($cells) => {
        const values = Array.from($cells, (el) => el.innerText.trim());
        cy.wrap(values);
      }
    );
  });
});

// API login helper
Cypress.Commands.add('loginApi', (payload, expectedStatus = 200) => {
  return cy
    .request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      headers: { 'x-api-key': 'reqres-free-v1' },
      body: payload,
      failOnStatusCode: false, // Allow handling of non-2xx status codes
    })
    .then((response) => {
      expect(response.status).to.eq(expectedStatus);
      return response;
    });
});
