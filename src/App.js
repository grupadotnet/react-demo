import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      hasData: false
    };
    console.log('constructor');
  }
  render() {
    console.log('render');
    if (!this.state.hasData) return 'waiting...';

    const todos = this.state.todos.map(todo => <TodoItem key={todo.id} name={todo.name} />);
    return <div><ul>{todos}</ul></div>;
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.setState(
      {
        hasData: true,
        todos: [{ id: 1, name: 'foo', isCompleted: false }]
      });
    //console.log('todos', this.state.todos);
  }
}

export default App;
