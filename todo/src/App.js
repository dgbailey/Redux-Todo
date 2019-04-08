import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Todo from './components/Todo.js'
import todostore from './reducers';


const store = createStore(todostore);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Todo/>
      </Provider>
    );
  }
}

export default App;
