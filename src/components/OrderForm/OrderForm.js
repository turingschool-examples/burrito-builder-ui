import React, { Component } from 'react';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleIngredientChange = (event) => {
    event.persist();
    event.preventDefault();
    const newIngred = event.target.value
      this.setState({ingredients: [...this.state.ingredients, newIngred]})

  }

  handleSubmit = e => {
    if(this.state.name && this.state.ingredients.length >= 1){
      this.props.addOrder(this.state.name, this.state.ingredients);
      this.clearInputs();
    }

  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} value={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)} type="button">
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
