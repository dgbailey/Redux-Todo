import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import Todo from './components/Todo.js'
import todostore from './reducers';
import logger from 'redux-logger';


const store = createStore(todostore,applyMiddleware(logger));//adding middleware for logging
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
