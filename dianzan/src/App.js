import React,{Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Comment from './comment/Comment'
import CommentApp from './comment/CommentApp';
// import {BrowserRouter } from 'react-router-dom'
class App extends Component {
  render(){
    return(<BrowserRouter>
    <Route path='/' component={Comment}/>
    <Route path='/comment' component={CommentApp}/>
    </BrowserRouter>)
    
  }
}
 
export default App;
