import React, { Component } from 'react';
import CommentList from './CommentList';


export default class CommentApp extends Component {
  render() {
    return (
      <div>
        <CommentList />
        Comment
      </div>
    )
  }
}