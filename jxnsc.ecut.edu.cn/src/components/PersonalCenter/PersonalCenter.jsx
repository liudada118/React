import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import { Row, Col } from 'antd';
import './index.css'
import { useState } from 'react';
import PersonalTop from './PersonalTop/PersonalTop';
import PersonSetting from './PersonSetting/PersonSetting';
import bgi from '../../assets/img3/bg.png'
import Top from '../common/Top/Top';
export default function PersonalCenter() {

    // console.log('22222222222220', arr6)
    const [memberyes, setmemberyes] = useState(0)
    const [memberN, setMemberN] = useState(1)
    const [memberNO, setmemberNo] = useState(-1)
    const [memberNumber, setMemberNumber] = useState([])
    const [memberList, setMemberList] = useState([
        {
            number: 0,
            info: [{
                type: 'text',
                value: '',
                name: '单位',
                id: 'memberSchool0'
            }, {
                type: 'text',
                value: '',
                name: '姓名',
                id: 'memberName0'
            }, {
                type: 'text',
                value: '',
                name: '邮箱',
                id: 'memberMailbox0'
            }, {
                type: 'number',
                value: '',
                name: '手机',
                id: 'memberPhone0'
            }, {
                type: 'number',
                value: '',
                name: '身份证',
                id: 'memberId0'
            },]
        }, {
            number: 1,
            info: [{
                type: 'text',
                value: '',
                name: '单位',
                id: 'memberSchool1'
            }, {
                type: 'text',
                value: '',
                name: '姓名',
                id: 'memberName1'
            }, {
                type: 'text',
                value: '',
                name: '邮箱',
                id: 'memberMailbox1'
            }, {
                type: 'number',
                value: '',
                name: '手机',
                id: 'memberPhone1'
            }, {
                type: 'number',
                value: '',
                name: '身份证',
                id: 'memberId1'
            }],
        }, {
            number: 2,
            info: [{
                type: 'text',
                value: '',
                name: '单位',
                id: 'memberSchool2'
            }, {
                type: 'text',
                value: '',
                name: '姓名',
                id: 'memberName2'
            }, {
                type: 'text',
                value: '',
                name: '邮箱',
                id: 'memberMailbox2'
            }, {
                type: 'number',
                value: '',
                name: '手机',
                id: 'memberPhone2'
            }, {
                type: 'number',
                value: '',
                name: '身份证',
                id: 'memberId2'
            }],
        }, {
            number: 3,
            info: [{
                type: 'text',
                value: '',
                name: '单位',
                id: 'memberSchool3'
            }, {
                type: 'text',
                value: '',
                name: '姓名',
                id: 'memberName3'
            }, {
                type: 'text',
                value: '',
                name: '邮箱',
                id: 'memberMailbox3'
            }, {
                type: 'number',
                value: '',
                name: '手机',
                id: 'memberPhone3'
            }, {
                type: 'number',
                value: '',
                name: '身份证',
                id: 'memberId3'
            }]
        }])
    const [content, setContent] = useState([
        {
            key: 'schoolName',
            type: '学校名称',
            content: '东华理工'
        },
        {
            key: 'professionalName',
            type: '专业名称',
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
        }, {
            key: 'mailbox',
            type: '队长邮箱',
            content: '@152462666',
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
    // let arr5 = [...memberList]
    // let arr6 = arr5.slice(0, memberNumber.length)
    useEffect(() => {
        let arr6 = [...array]
        let arr8 = []
        arr6.map((a) => { a.info.map((b) => { arr8.push(b) }) })
        let arr9 = arr8.filter((a) => a.value == '')
        setmemberyes(arr9.length)
    })

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
        // alert('aaaaaa')
    }
    const changeAllInput = () => {
        setIdNumberValue('')
        setProfessionalNameValue('')
        setSchoolNameValue('')
        setNameValue('')
        setPhoneValue('')
    }
    const memberAdd = () => {
        // a += 1
        let arr6 = [...array]
        let n = memberN
        n = 1
        // console.log(n)
        let arr = [...memberNumber]
        arr.push(n)
        setMemberN(n)
        setMemberNumber(arr)
        let arr5 = [...memberList]
        let b = []
        if (arr6.length > 0) {
            for (let i = 0; i < arr6.length; i++) {
                b.push(arr6[i].number)
            }
            for (let i = 0; i < arr5.length; i++) {
                if (b.includes(arr5[i].number)) { console.log(111333); continue }
                else {
                    console.log(111)
                    arr6.push(arr5[i])
                    break
                }
            }
        } else {
            arr6.push(arr5[0])
        }
        // arr6 = arr5.slice(0, arr.length)
        setArray(arr6)
        console.log(memberNumber.length, arr6, array)
    }
    const memberDel = (b) => {
        // let arr = [...memberNumber]
        // let c = arr.indexOf(b)
        // arr.splice(c, 1)
        // setMemberNumber(arr)
        console.log('33333333333330', b)
        let Lists = memberList
        let list = Lists.filter(a => a.number == b)
        // console.log('88888888888888888',list)
        list[0].info.map((c) => {
            c.value = ''
        })
        // setmemberNo(b)
        setMemberList(Lists)

        let arr6 = [...array]
        // let c = arr6.indexOf(list)
        // console.log(c)
        let c
        for (let i = 0; i < arr6.length; i++) {
            if (arr6[i].number == list[0].number) {
                c = i
                break
            }
        }
        arr6.splice(c, 1)
        console.log('+++++++++++++++++++++++++++++++++', arr6, list)
        setArray(arr6)
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
    const [teacherNameValue, setTeacherNameValue] = useState('')
    const [teacherIdValue, setTeacherIdValue] = useState('')
    const [teacherMailboxlValue, setTeacherMailValue] = useState('')
    const [teacherPhoneValue, setTeacherPhoneValue] = useState('')
    const [teacherSchoolValue, setTeacherSchoolValue] = useState('')
    let email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
    const [array, setArray] = useState([])
    console.log('--------------', array)
    const handelChange = event => {
        console.log(event.target.id)
        let e = event.target;
        const List = [...memberList];
        List.map((items, index) => {
            items.info.map((item, i) => {
                if (item.id === e.id) {
                    item.value = e.value;
                }
            })


        });
        setMemberList(List)
        // setArray(arr6)
    };

    return (
        <div className='personal' >
            <div className="personal-bg">
                <img src={bgi} alt="" />
            </div>
            <Top />
            <PersonalTop displayPreson={displayPreson} displaySetting={displaySetting} />
            {presonOrSetting
                ?//  个人中心
                <>
                    {!changeInfo ? //  基本信息
                        <div className='person-content'>
                            <div className="person-content_top person-content_text">
                                <div className="person-content_title"><h2>{'>> 基本信息'}</h2></div>
                                <div className="person-content_edit" onClick={changeInfoTrue}>{changeInfo ? null : '编辑'}</div>
                            </div>

                            {content.map((title, i) => {
                                return (
                                    <div className={`person-content_key person-content_text  person-content_${title.key}`} key={i}>
                                        <Row>
                                            <Col span={6}></Col>
                                            <Col span={6}>{`${title.type}:  `}</Col>
                                            <Col span={6}>{title.content}</Col>
                                            <Col span={6}></Col>
                                        </Row>
                                    </div>
                                )
                            })}</div>
                        : //编辑
                        <form action="">
                            <div className='person-content'>
                                <div className="person-content_top person-content_text">
                                    <div className="person-content_title"><h2>{'>> 基本信息'}</h2></div>
                                    <div className="person-content_edit" onClick={changeInfoTrue}>{changeInfo ? null : '编辑'}</div>
                                </div>
                                {content.map((title, i) => {
                                    return (
                                        <div className={`person-content_key person-content_${title.key}`} key={i}>
                                            <Row>
                                                <Col span={8}><label htmlFor={title.key}>{title.type}</label></Col>
                                                <Col span={16}>{title.key == 'schoolName'
                                                    ?
                                                    <div>
                                                        <input id={title.key} value={schoolNameValue} onChange={changeSchoolNameValue} name="schoolName" list="school" />
                                                        <datalist id="school">
                                                            {schoolName.map((name, i) => {
                                                                return (
                                                                    <option key={i} value={name}>{name}</option>
                                                                )
                                                            })}
                                                        </datalist>
                                                    </div>
                                                    : title.key == 'mailbox' ? title.content : <input value={i == 1 ? professionaNamelValue : i == 2 ? nameValue : i == 3 ? phoneValue : i == 4 ? idNumberValue : null} onChange={i == 1 ? changeProfessionalNameValue : i == 2 ? changeNameValue : i == 3 ? changePhoneValue : i == 4 ? changeIdNumberValue : null} type={i == 3 || i == 4 ? 'number' : 'text'} id={title.key} name={title.key} />}</Col>
                                            </Row>
                                        </div>
                                    )
                                })}
                            </div >
                            <div className='person-content'>
                                <div className="person-content_top person-content_text">
                                    <div className="person-content_title"><h2>{'>> 团队信息'}</h2></div>
                                </div>
                                <div className='createTeam-content_teacherKey'  >

                                    <div className='teacher-infos'>
                                        <div className='teacher-info'>
                                            <div className='teacher-label'><label htmlFor={`teacherSchool`}>{`单位`}</label></div>
                                            <div className='teacher-input'><input value={teacherSchoolValue} onChange={changeTeacherSchoolValue} type="text" id={`teacherSchool`} /></div>
                                        </div>
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

                                    </div>

                                </div>
                                <div className="person-content_top person-content_text">
                                    {array.length == 4 ? <div className="person-content_title" onClick={() => { alert('达到最大成员数量') }}><div className="person-content_memberTitle"><div>添加成员</div></div></div>
                                        : memberyes > 0 ? <div className="person-content_title" onClick={() => { alert('请填完当前成员信息') }}><div className="person-content_memberTitle"><div>添加成员</div></div></div>
                                            : <div className="person-content_title" onClick={memberAdd}><div className="person-content_memberTitle"><div>添加成员</div></div></div>}
                                </div>
                                <div className='person-content_memberKey'  >
                                    {
                                        array.length > 0 ? array.map((a, index) => {
                                            return (
                                                <div className='member-infos' key={index}>
                                                    {
                                                        a.info.map((b, i) => {
                                                            return (
                                                                <div className='member-info' key={i}>
                                                                    <div className='member-label'><label     htmlFor={b.id}>{b.name}</label></div>
                                                                    {<div className='member-input'><input onChange={(e) => { handelChange(e) }}
                                                                        value={b.value}
                                                                        type="text" id={b.id} /></div>}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    <div className="member-info memberDel" onClick={() => { memberDel(a.number) }}> <div className='member-del_botton'>删除成员</div> </div>
                                                </div>
                                            )
                                        })
                                            : null}
                                </div>
                            </div>
                            <div className="person-content_button">
                                {professionaNamelValue == ''
                                    ? <div className='failSubmit' onClick={() => { alert('非法的专业名称') }}>保存</div>
                                    : schoolNameValue == '' || !schoolName.includes(schoolNameValue)
                                        ? <div className='failSubmit' onClick={() => { alert('非法的学校名称') }}>保存</div>
                                        : nameValue == ''
                                            ? <div className='failSubmit' onClick={() => { alert('非法的名字') }}>保存</div>
                                            : phoneValue == '' || phoneValue.length != 11
                                                ? <div className='failSubmit' onClick={() => { alert('非法的手机号码') }}>保存</div>
                                                : idNumberValue == '' || idNumberValue.length != 18
                                                    ? <div className='failSubmit' onClick={() => { alert('非法的身份证') }}>保存</div>
                                                    : teacherNameValue == ''
                                                        ? <div className='failSubmit' onClick={() => { alert('非法的老师名字') }}>保存</div>
                                                        : teacherSchoolValue == ''
                                                            ? <div className='failSubmit' onClick={() => { alert('非法的老师单位') }}>保存</div>
                                                            : teacherPhoneValue.length != 11
                                                                ? <div className='failSubmit' onClick={() => { alert('非法的老师手机号码') }}>保存</div>
                                                                : teacherIdValue.length != 18
                                                                    ? <div className='failSubmit' onClick={() => { alert('非法的老师身份证') }}>保存</div>
                                                                    : !email.test(teacherMailboxlValue)
                                                                        ? <div className='failSubmit' onClick={() => { alert('非法的邮箱') }}>保存</div>
                                                                        : memberyes > 0
                                                                            ? <div className='failSubmit' onClick={() => { alert('非法的队员') }}>保存</div>
                                                                            : <button className='person-content_subBotton' type="submit" value=''>保存</button>}
                                <button className='person-content_resBotton' type="reset" onClick={() => { changeInfoFalse(); changeAllInput() }}>取消</button>
                            </div>
                        </form>
                    }
                    {/* </div>  */}
                </>
                : // 设置中心
                <div className='person-content'><PersonSetting /></div>}
        </div>
    )
} 