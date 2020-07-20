import React, { Component } from 'react';
import jia from '../../img/1.png'
import { Link } from 'react-router-dom';
class Header extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div className='header'>
                    <Link to='/add' className='Header-img'>
                        <div>
                            <img src={jia} alt="" />
                        </div>
                    </Link>
                    <span className='app-name'>知识星球</span>
                </div>
            </React.Fragment>);
    }
}

export default Header;