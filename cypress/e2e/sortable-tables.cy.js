describe('Sortable Data Tables', () => {
  const table = '#table1';
  const header = 'Last Name';
  const sortAsc = (arr) => [...arr].sort();

  it('should last names sortable', () => {
    cy.navigateToTask('tables');

    cy.clickTableHeader(table, header);

    cy.getTableColumnValues(table, header).then((values) => {
      expect(values).to.deep.equal(sortAsc(values));
    });
  });
});
