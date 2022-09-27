import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  addIngredients = (e) => {
    e.preventDefault()
    this.setState({...this.state, ingredients: [...this.state.ingredients, e.target.value]})
  }

  addName = (e) => {
    e.preventDefault()
    this.setState({...this.state, name: e.target.value})
  }

  submitOrder = (e) => {
    e.preventDefault()
    this.state.name && this.state.ingredients &&
    this.props.handleOrder(this.state)
    this.clearInputs();
  }
  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} value={ingredient} name={ingredient} onClick={e => this.addIngredients(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form value={this.state} onSubmit={e => this.submitOrder(e)}>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.addName(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button >
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
