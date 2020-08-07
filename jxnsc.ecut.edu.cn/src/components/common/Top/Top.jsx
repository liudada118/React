import React, { useState } from 'react'
import './index.css'
import schoolImg from '../../../assets/img/schoolImg.png'
import { Link } from 'react-router-dom'
export default function Top(props) {
    const [Login, setLogin] = useState(true)
    return (
        <div style={{ height: '67px' }}>
            <header>
                <div className="top">
                    <div className="logo"><Link to='/'> <img src={schoolImg} alt="" /></Link></div>
                    <ul className='navTools'>
                        {props.person ? <li>{Login ? <span id="showPersonalCenter">
                            <Link to='/presonalCenter'>个人中心</Link>
                        </span> : <><a href="#lesson">登录</a><a href="#lesson">注册</a></>}</li> : null}
                    </ul>
                </div>
            </header>
        </div>
    )
}
