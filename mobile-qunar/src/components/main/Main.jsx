import React, { Component } from 'react';
import zhuan from '../../img/1.png'
import { Link } from 'react-router-dom'
import './Main.css'
import { connect } from 'react-redux';
// import store from '../../../../meituan/src/store';
class Main extends Component {
    state = {}
    changeAddress() {
        console.log(1)
        this.props.disChangeAddress('CHANGE')
    }
    render() {
        console.log(this.props)
        const { state } = this.props
        return (
            <div className="main">
                <div className="address">
                    {/* <Link to = '/fristAddressChange'>  */}
                    <div className='address-address' ><span>{state[0]}</span></div>
                    {/* </Link> */}
                    <div className='address-img'
                        onClick={this.changeAddress.bind(this)}
                    >
                        <img src={zhuan} alt="" />
                    </div>
                    {/* <Link to = '/lastAddressChange'>  */}
                    <div className='address-address address-right'><span>{state[1]}</span></div>
                    {/* </Link> */}
                </div>
                <input type="date" value = ''/> 
                <div className="car-type">
                    <div className='type-name'><label><input name="Fruit" type="checkbox" value="" />动车/高铁 </label>  </div>
                    <div className='type-name right-name'><label><input name="Fruit" type="checkbox" value="" />学生票</label> </div>
                </div>
                <Link to = {`/search/${state[0]+'-'+state[1]}`}><div className="search">火车票查询</div></Link>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return ({ state: state.address })
}
const mapDispatchToProps = (dispatch) => {
    return {
        disChangeAddress(type) {
            dispatch({
                type
            })
        }
    }



}
export default connect(mapStateToProps, mapDispatchToProps)(Main);