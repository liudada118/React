import React, { useState } from 'react'
import axios from 'axios';
import './Login.css'
import user_icon from './img/user_icon_copy.png'
import lock_icon from './img/lock_icon_copy.png'
import key from './img/key.png';
import bg from './img/bg.jpg';
import { Link } from "react-router-dom"
export default function Login() {
    const [username, setuser] = useState('');
    const [password, setpwd] = useState('');
    const [valicode , setvalicode] = useState('')
    const changeValicode = e =>{
        setvalicode(e.target.value)
    }
    const changeUsername = e => {
        setuser(e.target.value)
    }
    const changePwd = e => {
        setpwd(e.target.value)
    }

    const handleSubmit = () => {
        axios({
            method: 'post',
            url: '',
            data: {
                user: username,
                pwd: password
            }
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="bg">
                <img src={bg} />
            </div>
            <div className="header-title">
                第三届江西省高校网络安全技能大赛
            </div>
            <div className="login">
                <div className="login_title">
                    <span>用户登录</span>
                </div>
                <div className="login-fields">
                    <div className="login-fields_user">
                        <div className="icon">
                            <img src={user_icon} />
                        </div>
                        <input type="text" name="login_name" id="login_name" placeholder="账号" autocomplete="off" autofocus
                            value={username}
                            onChange={e => changeUsername(e)}
                        />
                    </div>

                    <div className="login-fields_password">
                        <div className="icon">
                            <img src={lock_icon} />
                        </div>
                        <input type="password" name="password" id="password" placeholder="密码" autocomplete="off"
                            value={password}
                            onChange={e => changePwd(e)} />
                    </div>

                    <div className="login-fields_password">
                        <div className="icon">
                            <img src={key} />
                        </div>
                        <input type="text" name="valicode" id="valicode" placeholder="验证码" autocomplete="off" maxlength="4" 
                            value={valicode}
                            onChange={e => changeValicode(e)}
                        />
                        <div className="validation">
                            <a href="">
                                <img src="http://192.168.1.103/user/createValicode" alt="图片加载失败" title="点击刷新" />
                            </a>
                        </div>
                    </div>
                    {username == ''
                        ? <div className="login-fields_submit" onClick={() => { alert('请输入账号') }}>
                            <input type="submit" value="登录" onclick="login()" />
                        </div>
                        : password == ''
                            ? <div className="login-fields_submit" onClick={() => { alert('请输入密码') }}>
                                <input type="submit" value="登录" onclick="login()" />
                            </div>
                            :valicode == ''
                            ? <div className="login-fields_submit" onClick={() => { alert('请输入验证码') }}>
                                <input type="submit" value="登录" onclick="login()" />
                            </div>
                            : <div className="login-fields_submit">
                                <input type="submit" value="登录" onclick="login()" onClick={handleSubmit} />
                            </div>}
                </div>
                <div className="disclaimer">

                    {/* <a href="#">忘记密码？</a>||
                    <a href="../index/index.html">返回</a> */}
                    <Link to="/findpwd" className="findpwd">
                        <span>忘记密码？</span>
                    </Link>

                    <Link to="/" className="goback">
                        <span>返回</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

