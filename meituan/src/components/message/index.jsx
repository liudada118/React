import React, { Component } from 'react';
import Botttom from '../bottom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Message extends Component {
    state = {}
    render() {
        const { money } = this.props
        return (
            <React.Fragment
            ><Botttom />
                <div  className='message-info '>信息</div>
                <Link to='/balance'><div >余额</div></Link>
            </React.Fragment>
        );
    }
}
// const mapStateToProps = (state) => {
//     return {
//         money: state.money
//     }
// }
export default Message;