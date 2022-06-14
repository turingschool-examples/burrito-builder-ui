import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    // this.props = props;
    this.state = {
      name: '',
      ingredients: [],
      
    };
  }
  // TO DO -----
  //  saveOrder method -> added to handleSubmit
  postOrder = async (newOrder) => {
    const { id, name, ingredients } = newOrder
    const order = {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json' 
      }
    }
    const response = await fetch('http://localhost:3001/api/v1/orders', order)
    const data = await response.json()

  }

  handleSubmit = e => {
    const { name, ingredients } = this.state
    e.preventDefault();
    if (name && ingredients[0]) {
      var newOrder = {
        id: Date.now(),
        ...this.state
      }
      this.postOrder(this.state)
    }
    this.clearInputs(newOrder);
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  handleNameChange = e => {
    e.preventDefault();
    this.setState({ name: e.target.value })
  }

  handleIngredientChange = e => {
    e.preventDefault();
    const ingredient = e.target.name
    if (this.state.ingredients.includes(ingredient)) {
      return
    } else {
    this.setState({ name: this.state.name, ingredients: [...this.state.ingredients, ingredient]})
  }}

  orderError = () => {
    const { name, ingredients } = this.state
    if (!name && !ingredients[0]) {
      return (
        <p>please fill out name and pick ingredients</p>
      )
    } else if (!name && ingredients[0]) {
      return (
        <p>please fill out your name</p>
      )
    } else if (!ingredients[0]) {
      return (
        <p>please pick at least one ingredient</p>
      )
    } else  { 
      return (
        <p>there ya go... click submit when you're ready</p>
      ) }
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        {this.orderError()}
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>
        
        <button onClick={e => this.handleSubmit(e)}>
          Submit
        </button>
      </form>
    )
  }
}

export default OrderForm;
