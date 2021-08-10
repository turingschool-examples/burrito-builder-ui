  describe('user flow', () => {
    it('Should have a 201 status code if successful', () => {
      cy.intercept(
        {
            method: "GET",
            url: "http://localhost:3001/api/v1/orders"
        }, 
        {
            status: 201,
            body: { 
                orders: [
                {
                "id": 1,
                "name": "Pat",
                "ingredients": [
                "beans",
                "lettuce",
                "carnitas",
                "queso fresco",
                "jalapeno"
                ]
                } ] 
            }
        }) 
cy.visit('http://localhost:3000');
}

)

    it('should display header title', () => {
      cy.get('h1').contains('Burrito Builder')
    })

    it('should have existing orders displaying on load', () => {
      cy.get('div[class="order"]').should('exist')
      cy.get('div[class="order"]').contains('Pat')
      cy.get('div[class="order"]').contains('Sam')
      cy.get('div[class="order"]').contains('Alex')
    })

    it('should display an order submission form', () => {
      const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream']
      possibleIngredients.forEach(ingredient => {
        cy.get('button').contains(ingredient)
      })
      cy.get('input[name="name"]').should('exist')
      cy.get('button').contains('Submit Order').should('exist')
      cy.get('p').contains('Order: Nothing selected').should('exist')
    })

    it('should show a message showing what ingredients have been selected', () => {
      cy.get('button').contains('steak').click()
      cy.get('p').contains('Order: steak')
      cy.get('button').contains('lettuce').click()
      cy.get('p').contains('Order: steak, lettuce')
      cy.get('button').contains('carnitas').click()
      cy.get('p').contains('Order: steak, lettuce, carnitas')
    })

    it('should complete a form that renders on the page', () => {
      cy.get('input[name="name"]').type('Em')
      cy.get('button').contains('sofritas').click()
      cy.get('button').contains('beans').click()
      cy.get('button').contains('Submit Order').click()
      cy.get('div[class="order"]').contains('Em')
    })

    it('should produce an error if no name is added', () => {
      cy.get('button').contains('sofritas').click()
      cy.get('button').contains('lettuce').click()
      cy.get('button').contains('Submit Order').click()
      cy.get('p').contains('Please enter a name and select at least two ingredients').should('exist')
    })
  })

  //


