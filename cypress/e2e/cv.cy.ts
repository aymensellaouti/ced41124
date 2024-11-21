import {APP_API} from '../../src/app/config/app-api.config';
describe('Should Visit Cv Page', () => {
  it('should show the list of cvs', () => {
    cy.intercept(APP_API.cv, {fixture: 'cvs'});
    cy.visit('/cv');
    cy.get('[data-cy=cvsList]');
    cy.get('[data-cy=cvCard]').should('not.exist');
    // cy.get('[data-cy="cvsList"] > :nth-child(1)');
    cy.get('[data-cy=cvsList]').children().first().click();
    cy.intercept(APP_API.cv + 1, { fixture: 'cv1' });
    cy.get('[data-cy=cvCardDetailsButton]').click({force:true});
    cy.location().should((location) => {
      expect(location.pathname).to.equal('/cv/1');
    });

  })
})
