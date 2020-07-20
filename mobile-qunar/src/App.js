import React, { useCallback }from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import store from './store/reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Carpiao from './components/chepiao/Carpiao';
import Head from './components/header/Head';
// const store = createStore(reducer)
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <Route exact path='/' component={Homepage} />
        <Route path = '/search/:address' component={Carpiao}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
