import React, { useState } from 'react'

import a from "../../assets/img2/a.png"
import b from "../../assets/img2/b.png"
import c from "../../assets/img2/c.png"
import d from "../../assets/img2/d.png"
import e from "../../assets/img2/e.png"
import f from "../../assets/img2/f.png"
import g from "../../assets/img2/g.png"
import h from "../../assets/img2/h.png"
import i from "../../assets/img2/i.png"
import j from "../../assets/img2/j.png"
import reward from "../../assets/img2/reward.png"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import { BackTop, Anchor } from 'antd';
import './Home.css'
// const { Link } = Anchor;
export default function Home() {
    
    

    return (
        <div className="home-wraper">
            <div className="header">

                <div className="top" id="atop">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <ul className="top-nav" id='topNav' >
                        <li>比赛介绍</li>
                        <li>参赛对象</li>
                        <li>比赛方式</li>
                        <li>比赛安排</li>
                        <li>奖项设置</li>
                        <li>赛事组织</li>
                        <li>联系方式</li>
                        <li className="new"></li>
                    </ul>
                    <ul className="navTools">
                        <li>&nbsp;&nbsp;&nbsp;&nbsp;
                            < Link to="/login" className="hreftologin">
                                <span id="hiddenLogin" >登录</span>
                            </Link>
                            < Link to="/register" className="hreftoregister">
                                <span id="hiddenLogin" >注册</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>




            <div className="container-wraper">
                <div className="home-title">
                    第三届江西省高校网络安全技能大赛
                </div>

                <div className="introduction" id="introduction">
                    <img src={a} alt="" />
                </div>

                <div className="object" id="object">
                    <img src={b} alt="" />
                </div>

                <div className="method" id="method">
                    <img src={c} alt="" />
                </div>

                <div className="ranger" id="ranger">
                    <img src={d} alt="" />
                </div>

                <div className="reward" id="reward">
                    <img src={h} alt="" className="reward1" />
                    <img src={reward} alt="" className="reward2" />
                </div>

                <div className="organization" id="organization">
                    <img src={f} alt="" />
                </div>

                <div className="phone" id="phone">
                    <div className="phone1">
                        <img src={j} alt="" className="phone1" />
                    </div>
                    <div className="phone2">
                        <img src={i} alt="" className="phone2" />
                    </div>
                </div>

               
                <div className="foot">
                    <div className="ft-org">
                        <p>东华理工大学  |  深信服公司  |  易霖博公司</p>
                    </div>
                    <div className="ft-copyright">
                        <p>Copyright©2020</p>
                    </div>

                </div>
            </div>

            <BackTop>
                    <div className="gototop">UP</div>
                </BackTop>

        </div>
    )
}

