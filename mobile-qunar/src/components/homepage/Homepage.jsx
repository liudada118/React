import React, { Component } from 'react';
import Main from '../main/Main';
import Header from '../header/Header'
class Homepage extends Component {
    state = {  }
    render() { 
        return ( <div className="header-wrapper">
             <Header title = '火车'/>
            <Main />
        </div> );
    }
}
 
export default Homepage;