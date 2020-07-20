import React,{Component} from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class Comment extends Component{
  render()
  {
    return (
      <React.Fragment>
     <CommentInput />
     <CommentList />
     </React.Fragment>
    )
  }
}
export default Comment