import React, { Component } from 'react';
import ShopHeader from '../shopheader';
class ShopComment extends Component {
    state = {  }
    render() { 
        console.log(this.props)
        return ( <React.Fragment>
            <ShopHeader prop={this.props}/>
            Comment
            </React.Fragment> );
    }
}
 
export default ShopComment;