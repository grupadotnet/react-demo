import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [],
      hasData: false,
      name: ''
    };
    console.log('constructor');
  }
  render() {
    console.log('render');
    if (!this.state.hasData) return 'waiting...';

    const todos = this.state.todos.map(todo => <TodoItem key={todo.id} name={todo.name} />);
    return (
      <div>

        <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
        <button onClick={(e) => this.handleCreateTodo(e)}>Add</button>

        <ul>{todos}</ul>
      </div>
    );
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

  handleChange(event) {
    this.setState({ name: event.target.value });

  }

  handleCreateTodo(event) {
    this.setState({ todos: [...this.state.todos, { id: this.state.todos.length + 1, name: this.state.name, isCompleted: false }] });
  }
}

export default App;
