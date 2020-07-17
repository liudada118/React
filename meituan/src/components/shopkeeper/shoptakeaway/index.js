import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ShopTakeaway extends Component {
    state = {  }
    render() { 
        const {type} = this.props.match.params
        return ( 
            <div>
                <Link to={`${'/'+ type +'/shopkeeper' }`}><div><button>{`<`}</button></div></Link>
                <div>商家已接单</div>
            </div>
         );
    }
}
 
export default ShopTakeaway;