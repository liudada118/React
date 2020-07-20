import React from 'react';
// import logo from './logo.svg';
import  notification from './nitification'
import './App.css';

function App (){
    return(
      <div className='app'>
      <button onClick={() => {
        notification.open({
          title: 'this is a title'
        })
      }}>open</button>
      <button onClick={() => {
        notification.close()
      }}>close</button></div>)
  }
  



export default App;
