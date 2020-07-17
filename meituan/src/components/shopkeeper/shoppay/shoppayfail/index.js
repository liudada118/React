import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ShopPayFail extends Component {
    state = {  }
    render() { 
        console.log(this.props.match.url)
        const {url} =this.props.match
        let aUrl = url.split('/')
        aUrl.splice(aUrl.length-1,1)
        // console.log(aUrl)
        const realUrl = aUrl.join('/')
        console.log(realUrl)
        return ( 
            <div className='pay-fail'>
                支付失败
                <Link to={realUrl}><button>返回支付页面</button></Link>
            </div>
         );
    }
}
 
export default ShopPayFail;