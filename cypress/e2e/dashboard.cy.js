import { fakeData, sadData } from "../fixtures/burritoFixture";



describe('User should be able to visit page:', () => {
  let visit = () => cy.visit('http://localhost:3000')

  beforeEach(() => {
    cy.intercept({method: 'GET', url: 'http://localhost:3001/api/v1/orders'}, fakeData)
    visit();
  })
  
  it('User should be greeted with a header that provides the site title:', () => {
    
  })
})