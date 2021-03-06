import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

// 页面
// - 列表：/?tab=all
// - 详情：/topic/
// let tab = 
// mv-vm
// view 
// model 数据
// vm 绑定：model 变了 view 自动更新
class App extends React.Component {
  constructor() {
    super()
    // model
    this.state = {
      tabs: [
        {content: '全部', param: 'all'},
        {content: '招聘', param: 'job'},
        {content: '精华', param: 'good'},
        {content: '分享', param: 'share'},
        {content: '问答', param: 'ask'},
      ],
      tab: 'all',
      isLoading: true,
      lists: []     // 文章列表
    }
  }
  // 生命周期
  // App 被 reactDom 渲染到 pc 上
  // 渲染：一套流程（生命周期）
  handleGetPost = () => {
    const { tab } = this.state;
    // 总 / 40 = 总页数
    axios({
      url: 'https://cnodejs.org/api/v1/topics',
      params: {
        tab: tab,
        page: 1,
        limit: 40
      }
    })
    .then(res => {
      // console.log(res.data)
      // 修改 状态
      this.setState({
        lists: res.data.data,
        isLoading: false
      })
    })
    .catch(err => {
      this.setState({
        isLoading: false
      })
    })
  }
  componentDidMount() {
    this.handleGetPost()
  }
  handleTabChange = (event) => {
    // this 定义位置决定的
    // 知道点了哪一项？？
    // event.target 
    // console.log(event.target)
    const tab = event.target.getAttribute('data-tab');
    // 发个请求
    this.setState({
      tab,
      isLoading: true,
    }, () => {
      // setState 异步
      this.handleGetPost()
    })
    // handleGetPost
  }
  render() {
    const { lists, tabs, tab, isLoading } = this.state;
    // js 表达式 都用 { } 包起来
    // view
    return (
      <div>
        {/* react 不渲染 那些 值为 空数组 false undefined null 的内容 */}
        { false }
        { null }
        { undefined }
        { isLoading && '正在加载中...'}
        {/* lists.length === 0 ? '暂无文章请重试' : ''  */}
        { lists.length === 0 && '暂无文章请重试' }
        {
          tabs.map((tabObj, i) => {
            return (
              <div key={i} data-tab={tabObj.param}
              className={tabObj.param === tab ? 'hight-light' : ''}
              onClick={this.handleTabChange}>
                { tabObj.content }
              </div>
            )
          })
        }
        {
          // map 返回，数组，react 如果 jsx(html + js) 存在数组，react 自己展开数组里面每一项
          // react 列表渲染
          // forEach 
          lists.map((list, i) => {
            return (
              <div key={i}>
                { list.title }
              </div>
            )
          })
        }
      </div>
    )
  }
}
// 默认导出
export default App;
// 命名导出

export const name = 'lilei';




// import React, { Component } from 'react'
// import axios from 'axios'
// import 'App.css'

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       tabs =[
//         { content: '', param: '' }
//       ]
//     }
//   }
//   handleGetPost = () => {
//     axios({
//       url: 'https://cnodejs.org/api/v1/topics',
//       params: {
//         tab: tab,
//         page: 1,
//         limit: 40
//       }
//     })
//     .then(res => {
//       this.setState=({
//         tab = 
//       })}
//     )
//   }
//   render() {
//     return (
//       <div></div>
//     )
//   }
// }

