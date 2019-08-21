import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Todo.styles.css';


class AddTodo extends Component {
  state = {
    title: ''
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <form 
        className="FormAdd" 
        onSubmit={this.handleSubmit} 
      >
        <input 
          className="InputTitle"
          type="text"
          name="title"
          placeholder="Add To Do ..."
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input 
          className="AddBtn" 
          type="submit" 
          value="submit" 
        />
      </form>
    )
  }
}


//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}


export default AddTodo;