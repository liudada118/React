// import React from 'react';
// import ReactDOM from 'react-dom'; // index.js  入口文件
// import CommentApp from './CommentApp'; // 模块机制 
// import './index.css'
// ReactDOM.render(
//   // react 的逐渐世界
//   <CommentApp />,
//   // 奈何桥畔， 孟婆  DOM document.createElement
//   // 真实DOM
//   document.getElementById('root')
// )


import React from 'react'
import ReactDOM from 'react-dom'
import CommentApp from './CommentApp'
import './index.css'
ReactDOM.render(
  <CommentApp />,
  document.getElementById('root')
)

