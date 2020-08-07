import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import './index.css'
import { useState } from 'react';
// import PersonalTop from './PersonalTop/PersonalTop';
// import PersonSetting from './PersonSetting/PersonSetting';
import bgi from '../../assets/img3/bg.png'
import Top from '../common/Top/Top';
// let a = 1
// let arr = [1]
export default function PersonalCenter() {
    const [content, setContent] = useState([
        {
            key: 'schoolName',
            type: '学校名称',
            content: '东华理工'
        },
        {
            key: 'professionalName',
            type: '团队名称',
            content: '软件工程'
        },
        {
            key: 'Name',
            type: '队长姓名',
            content: '刘达',
        },
        {
            key: 'phone',
            type: '队长手机号',
            content: '18577',
        },
        {
            key: 'idNumber',
            type: '队长身份证号码',
            content: '152462666',
        }])
    const [schoolName, setSchoolName] = useState([
        '江西水利职业学院'
        , '南昌工学院'
        , '江西应用技术职业学院'
        , '江西航空职业技术学院'
        , '南昌理工学院'
        , '吉安职业技术学院'
        , '江西农业大学信息中心'
        , '井冈山大学'
        , '江西农业工程职业学院'
        , '赣南医学院'
        , '新余学院'
        , '共青科技职业学院'
        , '宜春幼儿师范高等专科学校'
        , '华东交通大学'
        , '南昌师范学院'
        , '江西生物科技职业学院'
        , '江西医学高等专科学校'
        , '江西机电职业技术学院'
        , '江西师范高等专科学校'
        , '上饶职业技术学院'
        , '赣州师范高等专科学校'
        , '江西应用工程职业学院'
        , '江西旅游商贸职业学院'
        , '抚州职业技术学院'
        , '上饶师范学院'
        , '宜春职业技术学院'
        , '南昌航空大学'
        , '南昌职业学院'
        , '江西泰豪动漫职业学院'
        , '南昌工程学院'
        , '东华理工大学'
        , '赣西科技职业学院'
        , '江西新能源科技职业学院'
        , '南昌大学'
        , '江西司法警官职业学院'
        , '江西应用科技学院'
        , '江西工业贸易职业技术学院'
        , '江西师范大学'
        , '九江职业技术学院'
        , '景德镇陶瓷大学'
        , '赣南卫生健康职业学院'
        , '江西建设职业技术学院'
        , '江西财经大学'])
    const [presonOrSetting, setPresonOrSetting] = useState(true)
    const [changeInfo, setChangeInfo] = useState(false)
    const [schoolNameValue, setSchoolNameValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [professionaNamelValue, setProfessionalNameValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [idNumberValue, setIdNumberValue] = useState('')
    const [teacherNameValue, setTeacherNameValue] = useState('')
    const [teacherIdValue, setTeacherIdValue] = useState('')
    const [teacherMailboxlValue, setTeacherMailValue] = useState('')
    const [teacherPhoneValue, setTeacherPhoneValue] = useState('')
    const [teacherSchoolValue, setTeacherSchoolValue] = useState('')
    const [schoolRadio, setSchoolRadio] = useState('本科')
    const [protocol, setProtocol] = useState(false)
    const [agree, setAgree] = useState('')
    const [teacherN, setTeacherN] = useState(1)
    const [teacherNumber, setTeacherNumber] = useState([1])
    const changeInfoTrue = () => {
        setChangeInfo(true)
    }
    const changeInfoFalse = () => {
        setChangeInfo(false)
    }
    const displayPreson = () => {
        setPresonOrSetting(true)
    }
    const displaySetting = () => {
        setPresonOrSetting(false)
    }
    const changePhoneValue = (e) => {
        setPhoneValue(e.target.value)
    }
    const changeNameValue = (e) => {
        setNameValue(e.target.value)
    }
    const changeSchoolNameValue = (e) => {
        setSchoolNameValue(e.target.value)
    }
    const changeIdNumberValue = (e) => {
        setIdNumberValue(e.target.value)
    }
    const changeProfessionalNameValue = (e) => {
        setProfessionalNameValue(e.target.value)
    }



    const changeTeacherNameValue = (e) => {
        setTeacherNameValue(e.target.value)
    }
    const changeTeacherIdValue = (e) => {
        setTeacherIdValue(e.target.value)
    }
    const changeTeacherMailboxlValue = (e) => {
        setTeacherMailValue(e.target.value)
    }
    const changeTeacherPhoneValue = (e) => {
        setTeacherPhoneValue(e.target.value)
    }
    const changeTeacherSchoolValue = (e) => {
        setTeacherSchoolValue(e.target.value)
    }

    const changeAllInput = () => {
        setIdNumberValue('')
        setProfessionalNameValue('')
        setSchoolNameValue('')
        setNameValue('')
        setPhoneValue('')
        setTeacherNameValue('')
        setTeacherSchoolValue('')
        setTeacherMailValue('')
        setTeacherIdValue('')
        setTeacherPhoneValue('')
    }
    const changeTeacher = () => {
        // a += 1
        let n = teacherN
        n += 1
        console.log(n)
        let arr = [...teacherNumber]
        arr.push(n)
        setTeacherN(n)
        setTeacherNumber(arr)
    }
    const teacherDel = (b) => {
        let arr = [...teacherNumber]
        let c = arr.indexOf(b)
        arr.splice(c, 1)
        setTeacherNumber(arr)
    }
    const changeSchoolRadio = (e) => {
        setSchoolRadio(e.target.value);
        console.log(schoolRadio)
    }
    let email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    console.log(schoolRadio)
    return (
        <div className='createTeam' >
            <div className="createTeam-bg">
                <img src={bgi} alt="" />
            </div>
            {protocol ? <div className="createTeam-protocol">
                <div className="createTeam-protocol_info">
                    <div className='createTeam-protocol_text'>
                        <p>网络安全协议是营造网络安全环境的基础，是构建安全网络的关键技术。设计并保证网络安全协议的安全性和正确性能够从基础上保证网络安全，避免因网络安全等级不够而导致网络数据信息丢失或文件损坏等
                    信息泄露问题。在计算机网络应用中，人们对计算机通信的安全协议进行了大量的研究，以提高网络信息传输的安全性。</p></div>
                    <div className="createTeam-protocol_yesOrNo">
                        <div onClick={() => { setProtocol(false); setAgree('我同意') }} className="yesProtocol">确认</div>
                        <div className="noProtocol" onClick={() => { setProtocol(false) }}>取消</div>
                    </div>
                </div>
            </div> : null}
            <Top person={'1'} />
            <div className="createTeam-content_bigTitle">创建队伍</div>
            <form className='createTeam-content_form' action="">
                {<div className='createTeam-content'>
                    <div className="createTeam-content_top createTeam-content_text">
                        <div className="createTeam-content_title"><h2>{'>> 基本信息'}</h2></div>
                    </div>
                    <div className="createTeam-content_key">
                        <Row>
                            <Col span={8}><label >队伍类型</label></Col>
                            <Col span={16}>
                                <div className='createTeam-content_schoolRadio'>
                                    <input type="radio" value='本科' checked={schoolRadio == '本科'} onClick={changeSchoolRadio} id='school' name='typeSelete' /><label htmlFor="school">本科</label></div>
                                <div className='createTeam-content_schoolRadio'>
                                    <input type="radio" value='高职'
                                        checked={schoolRadio == '高职'}
                                        onClick={changeSchoolRadio} id='vocationalColleges' name='typeSelete' /><label htmlFor="vocationalColleges">高职</label></div>
                            </Col>
                        </Row></div>
                    {content.map((title, i) => {
                        return (
                            <div className={`createTeam-content_key createTeam-content_${title.key}`} key={i}>

                                <Row>
                                    <Col span={8}><label htmlFor={title.key}>{title.type}</label></Col>
                                    <Col span={16}>{title.key == 'schoolName'
                                        ?
                                        <div>
                                            <input id={title.key} value={schoolNameValue} onChange={changeSchoolNameValue} name="schoolName" list="schools" />
                                            <datalist id="schools">
                                                {schoolName.map((name, i) => {
                                                    return (
                                                        <option key={i} value={name}>{name}</option>
                                                    )
                                                })}
                                            </datalist>
                                        </div>
                                        : <input value={i == 1 ? professionaNamelValue : i == 2 ? nameValue : i == 3 ? phoneValue : i == 4 ? idNumberValue : null} onChange={i == 1 ? changeProfessionalNameValue : i == 2 ? changeNameValue : i == 3 ? changePhoneValue : i == 4 ? changeIdNumberValue : null} type={i == 3 || i == 4 ? 'number' : 'text'} id={title.key} name={title.key} />}</Col>
                                </Row>
                            </div>
                        )
                    })}




                </div>}
                {<div className='createTeam-content'>
                    <div className="createTeam-content_top createTeam-content_text">
                        <div className="createTeam-content_title"><h2>{'>> 指导老师信息'}</h2></div>
                    </div>
                    <div className='createTeam-content_teacherKey'  >

                        <div className='teacher-infos'>
                            <div className='teacher-info'>
                                <div className='teacher-label'><label htmlFor={`teacherName`}>{`姓名`}</label></div>
                                <div className='teacher-input'><input value={teacherNameValue} onChange={changeTeacherNameValue} type="text" id={`teacherName`} /></div>
                            </div>

                            <div className='teacher-info'>
                                <div className='teacher-label'><label htmlFor={`teacherEm`}>{`邮箱`}</label></div>
                                <div className='teacher-input'><input value={teacherMailboxlValue} onChange={changeTeacherMailboxlValue} type="text" id={`teacherEm`} /></div>
                            </div>
                            <div className='teacher-info'>
                                <div className='teacher-label'><label htmlFor={`teacherPhone`}>{`电话`}</label></div>
                                <div className='teacher-input'><input value={teacherPhoneValue} onChange={changeTeacherPhoneValue} type="number" id={`teacherPhone`} /></div>
                            </div>
                            <div className='teacher-info'>
                                <div className='teacher-label'><label htmlFor={`teacherId`}>{`身份证`}</label></div>
                                <div className='teacher-input'><input value={teacherIdValue} onChange={changeTeacherIdValue} type="number" id={`teacherId`} /></div>
                            </div>
                            <div className='teacher-info'>
                                <div className='teacher-label'><label htmlFor={`teacherSchool`}>{`单位`}</label></div>
                                <div className='teacher-input'><input value={teacherSchoolValue} onChange={changeTeacherSchoolValue} type="text" id={`teacherSchool`} /></div>
                            </div>
                        </div>

                    </div>
                    <div className="createTeam-content_protocol">
                        <input onClick={() => { setAgree('我同意') }} checked={agree == '我同意'} type="radio" id='protocol' name='protocolSelete' /> <label htmlFor="protocol">我同意</label><span onClick={() => { setProtocol(true) }} className='createTeam-content_protocolName'>网络协议</span>
                    </div>
                    <div className="createTeam-content_button">
                        {professionaNamelValue == ''
                            ? <div className='failSubmit' onClick={() => { alert('非法的团队名称') }}>确认创建</div>
                            : schoolNameValue == '' || !schoolName.includes(schoolNameValue)
                                ? <div className='failSubmit' onClick={() => { alert('非法的学校名称') }}>确认创建</div>
                                : nameValue == ''
                                    ? <div className='failSubmit' onClick={() => { alert('非法的名字') }}>确认创建</div>
                                    : phoneValue == '' || phoneValue.length != 11
                                        ? <div className='failSubmit' onClick={() => { alert('非法的手机号码') }}>确认创建</div>
                                        : idNumberValue == '' || idNumberValue.length != 18
                                            ? <div className='failSubmit' onClick={() => { alert('非法的身份证') }}>确认创建</div>
                                            : teacherNameValue == ''
                                                ? <div className='failSubmit' onClick={() => { alert('非法的老师名字') }}>确认创建</div>
                                                : teacherSchoolValue == ''
                                                    ? <div className='failSubmit' onClick={() => { alert('非法的老师单位') }}>确认创建</div>
                                                    : teacherPhoneValue.length != 11
                                                        ? <div className='failSubmit' onClick={() => { alert('非法的老师手机号码') }}>确认创建</div>
                                                        : teacherIdValue.length != 18
                                                            ? <div className='failSubmit' onClick={() => { alert('非法的老师身份证') }}>确认创建</div>
                                                            : !email.test(teacherMailboxlValue)
                                                                ? <div className='failSubmit' onClick={() => { alert('非法的邮箱') }}>确认创建</div>
                                                                : agree == ''
                                                                    ? <div className='failSubmit' onClick={() => { alert('请勾选协议') }}>确认创建</div>
                                                                    : <button className='createTeam-content_subBotton' type="submit" value=''>确认创建</button>}
                    </div>
                </div>}

            </form>
        </div>
    )
} 