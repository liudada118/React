import React, { Component } from 'react';
import Number from '../../common/numberAddOrSub'
import { connect } from 'react-redux'
// import store from '../../store/index';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ThingAdd, ThingSub } from '../../store/action/shoping/shoping'
import shopingReducer from '../../store/reduces/shoping/shoping';
import './index.css'
import ShopHeader from './shopheader';
import ShopTypeList from './shoptypelist';
import Foodorder from './foodorder';
import { Link } from 'react-router-dom';
import { Route } from 'react-router'
import FoodList from './foodlist';
// import { render } from 'react-dom';
const store = createStore(shopingReducer)
// const render =()=> {
// let a = store.getState()
// }
class Shopkeeper extends Component {
    state = {
        infos:[{
            id:1,
            name:'点菜',
            type:'order'
        },
        {
            id:2,
            name:'评价',
            type:'comment'
        },
        {
            id:3,
            name:'店家',
            type:'business'
        },],
    }
    componentDidMount() {
        // this.porps.fetchHomeList()
    }
    // handleUrl(url){
    //     this.props.history.push({
    //         pathname:url
    //     })
    // }
    render() {
        const {infos} = this.state
        const {match} = this.props
        const { type } = this.props.match.params
        // console.log('+++++++++++++', match.url,`${match.url+'/order'}`,`${match.url+'/'+infos[0].type}`)
        // const sshop=`shop${id}`
        // const {sshop} = this.state
        // console.log(this.state.shop)
        // let b = this.state.shop.find(e=>{e.type==type})
        return (
               <React.Fragment>

                <ShopHeader prop={this.props}/>
                <div key = {'2'} className="main">
                    <FoodList 
                    prop={this.props} 
                    // onSubmit={}
                    />
                    <ShopTypeList />
                </div>
                <Foodorder type={type}/>  
                  </React.Fragment>
        );
    }

}
export default Shopkeeper