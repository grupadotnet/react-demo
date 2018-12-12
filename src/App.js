import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

const api = 'https://demo-todos-api.azurewebsites.net/api/todo';
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
    this.getTodos();
    //console.log('todos', this.state.todos);
  }

  getTodos() {
    fetch(api)
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            hasData: true,
            todos: data
          });
      });
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleCreateTodo() {
    fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: this.state.name })
    }).then(rawResponse => rawResponse.json())
      .then(content => {
        console.log(content);
        this.getTodos();
      });
  }
}

export default App;
