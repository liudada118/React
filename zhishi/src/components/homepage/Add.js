import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import addImg from '../../img/8.png'
let obj1
class Add extends Component {
    constructor() {
        super()
        this.state = {
            nameVal: '',
            imgVal: '',
            obj: []
        }
    }
    componentDidMount() {
        if (localStorage.getItem('state')) {
            this.setState({
                obj: JSON.parse(localStorage.getItem('state'))
            })
        }
    }
    handleNameVal(e) {
        this.setState({
            nameVal: e.target.value
        })
    }
    handleImgVal(e) {
        this.setState({
            imgVal: e.target.value
        })
    }
    handleLocalStroage() {
        obj1 = this.state.obj
        obj1.push({ 'img': `${this.state.imgVal}`, 'name': `${this.state.nameVal}` })
        localStorage.setItem('state', JSON.stringify(obj1))
    }
    render() {
        console.log(!this.state.nameVal==''||this.state.nameVal.trim()=='')
        // console.log(this.state.nameValc? 1 : 2,)
        return (
            <div>
                <div className="add-top">
                    <Link to='/' ><div className='add-fanhui'>取消</div></Link>
                    
                        {this.state.nameVal? <Link to='/'><div className= ' add-nexta'
                            onClick={this.handleLocalStroage.bind(this)}
                        >下一步</div></Link> : <Link to='#'><div className= 'add-next'
                        >下一步</div></Link>}
                </div>
                <div className='add-main'>
                    {/* <input value={this.state.imgVal} onChange={this.handleImgVal.bind(this)} type="text" /> */}
                        <div className="add-img">
                            <img src={addImg} alt=""/>
                    </div>
                    <div className='add-inputdiv'>
                        <input type="text" className='add-input' value={this.state.nameVal} placeholder='请输入星球' onChange={this.handleNameVal.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Add;