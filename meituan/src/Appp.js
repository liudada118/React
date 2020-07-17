import React, { Component } from 'react'
import Homepage from './components/homePage'
import { BrowserRouter, Route, Redirect, Link } from 'react-router-dom'
import Message from './components/message'
import Order from './components/order'
import "./App.css"
import homepage from './assets/img/homepage.png'
import message from './assets/img/message.png'
import order from './assets/img/order.png'
import Shopkeeper from './components/shopkeeper'
import App from './App'
import { Provider } from 'react-redux'
import store  from './store'
import FoodList from './components/shopkeeper/foodlist'
import ShopComment from './components/shopkeeper/comment'
import ShopBusiness from './components/shopkeeper/business'
import ShopPay from './components/shopkeeper/shoppay/index'
import ShopPayFail from './components/shopkeeper/shoppay/shoppayfail'
import ShopPaySuccess from './components/shopkeeper/shoppay/shoppaysuccess'
import ShopTakeaway from './components/shopkeeper/shoptakeaway'
import Balance from './components/message/balance'
// import {PersistGate} from '../node_modules/redux-persist/integration/react';

// const store = createStore(shopingReducer)
class Appp extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <Route exact path="/" component={Homepage} />
          <Route path="/homepage" component={Homepage} />
          <Route path="/message" component={Message} />
          <Route path="/order" component={Order} />
          <Route path='/:type/shopkeeper/order' component={Shopkeeper} />
          <Route path='/:type/shopkeeper/comment' component= {ShopComment}/>
          <Route path='/:type/shopkeeper/business' component= {ShopBusiness}/>
          <Route exact path='/:type/shopkeeper/pay' component={ShopPay} />
          <Route path='/:type/shopkeeper/pay/fail' component={ShopPayFail} />
          <Route path='/:type/shopkeeper/pay/success' component={ShopPaySuccess} />
          <Route path='/:type/takeaway' component={ShopTakeaway}/>
          {/* <Redirect from="/*" to="/homepage" /> */}
          <Route exact path='/:type/shopkeeper' component={Shopkeeper}/>
          <Route path='/balance' component={Balance} />
          {/* <ShopPay /> */}
        </BrowserRouter>
        {/* </PersistGate> */}
        </Provider>
    )
  }
}

export default Appp