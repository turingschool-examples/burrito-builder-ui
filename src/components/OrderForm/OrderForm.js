import React, { Component } from 'react';
// import './OrderForm.css'


class OrderForm extends Component {
  constructor(props) {
    super(props);
    // this.props = props;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleNameChange = e => {
     this.setState({ [e.target.name]: e.target.value });
  }

  handleIngredientChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: this.state.ingredients.push(e.target.name) });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newOrder= {
      key: Date.now(),
     ...this.state
    }
    this.props.addOrder(newOrder)
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      console.log(ingredient)
      return (
        <button className='ing-btn' key={ingredient} name={ingredient} onClick={e=> this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form className='order-form'>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>
       
        <button className='submit-btn'
        
        
        onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
