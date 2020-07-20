import React,{Component} from 'react'
import Comment from './Comment'
class CommentList extends Component{
  render()
  {
    return (
      <React.Fragment>
          <Comment />
      </React.Fragment>
    )
  }
}
export default CommentList