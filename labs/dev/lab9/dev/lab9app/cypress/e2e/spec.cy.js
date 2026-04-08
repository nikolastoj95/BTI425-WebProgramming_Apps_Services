// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('calculator flow', ()=> {
   beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it ('Addition works', () => {
    cy.get('button').contains("5").click();
    cy.get('button[data-testid="btn-+"]').contains("+").click()
    cy.get('button[data-testid="btn-3"]').contains("3").click()
    cy.get('button[data-testid="btn-="]').contains("=").click()
    cy.get("input").should('have.value', '8')

  });

  it ('Subtraction works', () => {
    cy.get('button').contains("1").click();
    cy.get('button').contains("0").click();
    cy.get('button').contains("-").click();
    cy.get('button').contains("4").click();
    cy.get('button').contains("=").click();
    cy.get('input').should('have.value','6');
  });
  it ('Multiplication works', () => {
    cy.get('button').contains("6").click();
    cy.get('button').contains("*").click();
    cy.get('button').contains("7").click();
    cy.get('button').contains("=").click();
    cy.get('input').should('have.value','42');
  });
  it ('Divison works', () => {
    cy.get('button').contains("1").click();
    cy.get('button').contains("5").click();
    cy.get('button').contains("/").click();
    cy.get('button').contains("3").click();
    cy.get('button').contains("=").click();
    cy.get('input').should('have.value','5');
  });


  
})