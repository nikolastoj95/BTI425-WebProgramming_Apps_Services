// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe ('Logn FLow', ()=> {
  const validUser =   'admin';
  const validPass =  'admin'

  beforeEach(()=> {
    cy.clearCookies();
    cy.clearLocalStorage();
  });
  it('completed the full login/ logout flow',()=>{
    // user Navigates to login route
    cy.visit('/login');

    //User Enters valid credentials

    cy.get('input[name="userName"]').type(validUser);
    cy.get('input[name="password"]').type(validPass);
    cy.get('form').submit();

    //User is automatically redirected to /vehicles route

    cy.url().should('include', '/vehicles');

    // "Welcome" text is shown in the <nav>...</nav> element

    cy.get('nav').should('contain.text', 'Welcome');

    // User clicks the "Logout" button in the  <nav>...</nav> element

    cy.get('nav').contains('Logout').click();

    // User is automatically redirected to / route

     cy.url().should('eq', `${Cypress.config().baseUrl}/`);

    // User manually Navigates to /vehicles route
    cy.visit('/vehicles');

    // User is automatically redirected to /login route
    cy.url().should('include', '/login');

    // User Enters invalid credentials

    cy.get('input[name="userName"]').clear().type('abc');
    cy.get('input[name="password"]').clear().type('123');
    cy.get('form').submit();


    // <div role="alert">...</div> is rendered

    cy.get('div[role="alert"]').should('exist');




  });
});