import React, { Component } from 'react';
import { addOrder } from '../../apiCalls';
import './OrderForm.css';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    // this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  handleIngredientChange = (e) => {
    e.preventDefault();
    this.setState({ ingredients: [...this.state.ingredients, e.target.name]})
  }

  handleSubmit = e => {
    e.preventDefault();
    this.validateOrderInputs();
  }

  validateOrderInputs = () => {
    if (this.state.name && this.state.ingredients.length > 0) {
      addOrder({ name: this.state.name, ingredients: this.state.ingredients })
      this.props.handleAddOrder({name: this.state.name, ingredients: this.state.ingredients})
      this.clearInputs();
    } else {
      console.log('You must fill out both fields') 
      // eventually will add error to state and show error message on the DOM
    }
  }


  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button className="separate-ing-btns" key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
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
        <section className="ingredients-buttons">
          { ingredientButtons }
        </section>

        <p className="order-ingredients">Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button className="submit-btn" onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
