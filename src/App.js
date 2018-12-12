import React, { Component } from 'react';
import './App.css';

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
    return (
      <div>Hello React!</div>
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
}

export default App;
