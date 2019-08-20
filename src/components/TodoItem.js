import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TodoItem.styles.css';


export class TodoItem extends Component {

  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    return (
      <div className="TodoItem" style={this.getStyle()}>
        <p>
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