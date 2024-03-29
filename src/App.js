import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';

import Posts from './components/Posts';
import Postform from './components/Postform';

import store from './store';

// import { applyMiddleware } from '../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Postform></Postform>
      <Posts/>
    </div>
    </Provider>
  );
}

export default App;
