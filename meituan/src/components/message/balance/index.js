import React, { Component } from 'react';
import money from '../../../store/reduces/money/money';
import { connect } from 'react-redux';
import { MoneysAdd } from '../../../store/constants';
import { Link } from 'react-router-dom';
class Balance extends Component {
    constructor(){
        super()
        this.state = {
            inputValue : ''
        }
    }
    render() {
        // const {url} = this.props.match
        // let aUrl =url.split('/')
        // aUrl.splice(aUrl.length-1,1)
        // let realUrl = aUrl.join('/')
        // console.log(this.props.match) 
        return ( <div>
            <Link to='/message'><div><button>{`<`}</button></div></Link>
            <div>我的余额</div>
            <div>{this.props.money}</div>
            <div>
                <input type="number" value={this.state.inputValue} onChange={this.valueChange.bind(this)}/>
                <button onClick={this.addBalance.bind(this,this.state.inputValue)}>充值</button></div>
        </div> );
    }
    valueChange(e){
        this.setState({
            inputValue : e.target.value
        })
    }
    addBalance(value){
       this.props.addBalanceNumber(MoneysAdd,value)
    }
}

const mapStateToProps = (state)=>{
    return (
        {money : state.money}
    )
}
const mapDispatchToProps = (dispatch)=>{
    return(
       { 
           addBalanceNumber(type,allPrice){
           dispatch({
               type,
               allPrice : JSON.parse(allPrice)
           })
       }}
        ) 
}
export default connect(mapStateToProps,mapDispatchToProps)(Balance);