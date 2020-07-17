import Number from '../../../common/numberAddOrSub'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
class Foodorder extends Component {
    state = {}
    render() {
        // console.log(this.props.a)
        let money = 0 
        return (<div className='shopfood-orders'>
            {this.props.a.map(b => {
                if (b.number != 0) {
                    money += b.price*b.number
                     return (
                    <div key={b.key} className="shopfood-order">
                        <div className="food-img">
                            <img src={b.img} alt="" />
                        </div>
                        <div className="info">
                            <div className='food-name'>{b.name}</div>
                            <div className="price">{b.price*b.number}</div>
                        </div>

                        {/* <div className="food-number">{b.number}</div> */}
                        <Number type={b.key} />
                    </div>
                )}
            }
            )}
            <div key='nu' className='food-order'>
                <div>总计</div>
                <div>{money}</div>
               {money?<Link to={`${'/'+this.props.type+'/shopkeeper/pay'}`}> <button>结算</button> </Link>:null}
            </div>
        </div>);
    }

}
const mapStateToProps = (state) => {
    // let a= 0
    return {
        a: state.shop
    }
}

export default connect(mapStateToProps)(Foodorder);