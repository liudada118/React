import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Homepage from './components/homepage';
import Add from './components/homepage/Add';
import Maininfo from './components/homepage/Maininfo';
function App() {
  return (
  <div className="App">
    <BrowserRouter >
        <Route exact path = '/' component={Homepage} />
        <Route path = '/add' component={Add} />
        <Route path = '/planet/:name' component={Maininfo } />
    </BrowserRouter>
     </div> 
  );
}

export default App;
