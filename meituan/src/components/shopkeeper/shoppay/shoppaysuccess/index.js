import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ShopPaySuccess extends Component {
    state = {  }
    render() { 
        const {type} = this.props.match.params
        console.log(type)

        return ( 
            <div className='pay-fail'>
                支付成功
                <Link to={`${'/'+type+'/takeaway'}`}><button>确定</button></Link>
            </div>
         );
    }
}
 
export default ShopPaySuccess;