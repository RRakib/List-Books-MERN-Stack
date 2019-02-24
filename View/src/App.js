import React, { Component } from 'react';
import Todo from "./Components/Todo/Todo"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Book Listing App</h1>
        <Todo />
      </div>
    );
  }
}

export default App;
