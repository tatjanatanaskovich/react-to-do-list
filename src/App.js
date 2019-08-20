import React, { Component } from 'react';
import Header from './components/layout/Header'
import Todos from './components/todos/Todos'
import AddTodo from './components/todos/AddTodo';
import uuid from 'uuid';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Prepare food for dinner',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go to shopping',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Hang out with friends',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});
  }

  deleteTodo = (id) => {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo]});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <AddTodo addTodo={this.addTodo} />
          <Todos 
            todos={this.state.todos} 
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}
  

export default App;