describe('Reqres API - Login', () => {
  beforeEach(() => {
    cy.fixture('login').as('loginData');
  });

  it('POST /login with valid payload should return 200 and token', function () {
    cy.loginApi(this.loginData.validUser).then((response) => {
      expect(response.body).to.have.property('token');
    });
  });

  it('POST /login with missing password should return 400 and error', function () {
    cy.loginApi(this.loginData.missingPassword, 400).then((response) => {
      expect(response.body).to.have.property('error', 'Missing password');
    });
  });
});
