import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Todo.styles.css';


class TodoItem extends Component {

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div 
        className="TodoItem" 
        style={this.getStyle()}
      >
        <p>
          <input 
            type="checkbox" 
            onChange={this.props.markComplete.bind(this, id)} 
          /> 
          {' '}
          { title }
          <button 
            className="DeleteBtn"
            onClick={this.props.deleteTodo.bind(this, id)} 
          >
            x
          </button>
        </p>
      </div>
    );
  }
}


//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}


export default TodoItem;