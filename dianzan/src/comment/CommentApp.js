import React ,{Component} from 'react'
import { Route } from 'react-router'
import CommentInput from './CommentInput'
import CommentInputb from './CommentInputb'
import CommentInputa from './CommentInputa'
// import CommentInput from './CommentInput'
// import CommentLIst from './CommentLIst'
class CommentApp extends Component{
    handleUrl(url){
        this.props.history.push({
            pathname:url
        })
    }
    render (){
        const {match} = this.props
        return(
            <React.Fragment>
            <div 
            onClick={this.handleUrl.bind(this,`${match.url+'/order'}`)}
            >
                aaa
            </div>
            <div 
            onClick={this.handleUrl.bind(this,`${match.url+'/match'}`)}
            >
                aaa
            </div>
            <div 
            onClick={this.handleUrl.bind(this,`${match.url+'/val'}`)}
            >
                aaa
            </div>
            <Route path={`${match.url+'/order'}`} component={CommentInput}/>
            <Route path={`${match.url+'/match'}`} component={CommentInputb}/>
            <Route path={`${match.url+'/val'}`} component={CommentInputa}/>
            </React.Fragment>
        )
    }
}

export default CommentApp