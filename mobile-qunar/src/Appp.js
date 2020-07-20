import React, { useReducer, useCallback, useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import store from './store/reducer'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import Carpiao from './components/chepiao/Carpiao';
import Head from './components/header/Head';
import Journey from './components/journey/Journey';
// import { from, to } from './store/reducers'
import {exchangeFromTo} from './store/action'

function Appp(props) {
  // const [fromStore, fromDispatch] = useReducer(from, { state: '北京' })
  // const [toStore, toDispatch] = useReducer(to, { state: '上海' })
  const{from ,to , dispatch} = props
  
  // const {from,to} = props
  // console.log(props, store)
  const onBack = useCallback(() => {
    console.log(1)
    window.history.back()
  }, [])
  const cbs = useMemo(()=>{
    return bindActionCreators({
      exchangeFromTo
  //     dispatch({
  //       type : ACTION_SET_TO,
  //       payload : to
  //   })
  //   dispatch({
  //     type : ACTION_SET_FROM,
  //     payload : from
  // })
    },dispatch)
  },[])
  return (
    <div>
      <div className="header-wrapper">
        <Head title='火车票' onBack={onBack} />
        {/* <Main /> */}
        <form action="./query.html" className='from'>
          <Journey from={from} to={to} {...cbs} />
        </form>
      </div>
    </div>
  )
}
export default connect(function mapStateToProps(state){
    return state
},function mapDispatchToProps(dispatch){
  return {
    dispatch
  }
})(Appp)
// export default Appp;
