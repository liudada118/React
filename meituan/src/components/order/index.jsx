import React, { Component } from 'react';
import Botttom from '../bottom';
import { connect } from 'react-redux';
import { ShopArray } from '../../store/constants';
import './index.css'
class Order extends Component {
    state = {}
    render() { 
        let i = 0
        let c =0
        return (
            <div className='orders'>
                <Botttom />
            {ShopArray.map(a=>{
                return (
                <div className='order'>
                <div>{a[0].type}</div>
                <div className='order-info'>
                    {a.map(b=>{
                        c+=b.number*b.price
                        return (
                            <div className='order-food' >
                                <div className='order-foodImg'>
                                    <img src={b.img} alt=""/>
                                </div>
                                <div className='order-name'>{b.name}</div>
                        
                            </div>
                            
                        )
                    })}
                    <div className='order-allPrice'>{c}</div>
                    </div>
                </div>)
                    i++
                // return(
                // <div key={i}>
                //     <div>{a.type}</div>
                //     {a.name}
                //     {`${a.number}*${a.price}`}
                //     {a.allPrice}
                // </div>
                // )
               
            })}
            </div>);
    }
}

export default Order;