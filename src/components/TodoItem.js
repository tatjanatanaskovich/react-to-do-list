import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.styles.css';


class TodoItem extends Component {

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    return (
      <div className="TodoItem" style={this.getStyle()}>
        <p>
          <input 
            type="checkbox" 
            onChange={this.props.markComplete.bind(this, this.props.todo.id)} 
          /> 
          {' '}
          {this.props.todo.title}
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