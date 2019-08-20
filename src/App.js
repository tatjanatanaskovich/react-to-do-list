import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Prepare food for dinner',
        completed: false
      },
      {
        id: 2,
        title: 'Go to shopping',
        completed: false
      },
      {
        id: 3,
        title: 'Hang out with friends',
        completed: false
      }
    ]
  }
  render() {
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}
  


export default App;