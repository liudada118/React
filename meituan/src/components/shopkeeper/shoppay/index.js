import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ThingPay } from '../../../store/action/shoping/shoping';
import { ThingsPay,Money, MoneysAdd, MoneysSub,ShopArray } from '../../../store/constants';
import { Link } from 'react-router-dom';
class ShopPay extends Component {
    state = {}
    render() {
        let ads = {}
        let c =[]
        let allPrice = 0
        let allNumber = 0
        const { type } = this.props.match.params
        const {url} = this.props.match
        let aUrl =url.split('/')
        aUrl.splice(aUrl.length-1,1)
        let realUrl = aUrl.join('/')
        console.log('2222222222',ShopArray)
        // console.log(this.props.match.params.type)
        // console.log('+++++++',this.props.money)
        return (<div className="pay">
            <Link to={realUrl}><div><button>{`<`}</button></div></Link>
            {this.props.a.map(b => {
                if (b.type == type) {
                    allPrice += b.number * b.price

                if(b.number>0)   { 
                    
                     ads = {
                        number : b.number,
                        allPrice : allPrice,
                        price : b.price,
                        name : b.name,
                        type : b.type,
                        img : b.img
                    }
                    c.push(ads)
                    return (
                        <div className='pay-food' key={b.key}>
                            <div className="pay-img">
                                <img src={b.img} alt="" />
                            </div>
                            <div>
                                <div>{b.name}X{b.number}</div>
                                <div>单价:{b.price}</div>
                            </div>
                            <div>{b.number * b.price}</div>
                        </div>
                    )}
                }
            })}
            <div className='allprice'>
                <div>总计</div>
                <div>{allPrice}</div>
                {this.props.money-allPrice<0
                ?<Link to={`/${type}/shopkeeper/pay/fail`}><button>结算</button></Link>
                :<Link to={`/${type}/shopkeeper/pay/success`}><button onClick={this.handleAction.bind(this,allPrice,c)}>结算</button></Link>}
            </div>
        </div>);
        // return(1)
        // Money -=allPrice
    }
    handleAction(allPrice,c) {
        this.props.resetNumber(ThingsPay)
        this.props.resetMoney(MoneysSub,allPrice)
        ShopArray.push(c)
       
    }
}

const mapStateToProps = (state) => {
    return (
        { a: state.shop ,
          money : state.money

        }
    )

}
const mapDispatchToProps = (dispatch) => {
    return {
            resetNumber(type) {
            dispatch({
                type
            })
        },
            resetMoney(type,allPrice){
                dispatch({
                    type,
                    allPrice
                })
            }
    }
    
}
// const mapDispatchToProps = (dispatch) => {
//     // console.log('------')
//     return {
//         fetchNumber(type, key) {
//             // console.log('-------------')
//             dispatch({
//                 type,
//                 key
//             })
//         },
//     }
// }
export default connect(mapStateToProps,mapDispatchToProps)(ShopPay);