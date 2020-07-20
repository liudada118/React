import React, { Component } from 'react';
import jiahao from '../../img/1.png'
import { Link } from 'react-router-dom';
import b from '../../img/7.png'
class Main extends Component {
    constructor() {
        super()
        this.state = {
            lists: []
        }
    }
    componentDidMount() {
        if(localStorage.getItem('state')){
            const state = JSON.parse(localStorage.getItem('state'))
        this.setState({
            lists: state
        })
        }
    }
    render() {
        console.log(this.state.lists)
        return (
            <div className='main'>
                {this.state.lists.map((a, i) => {
                    return (
                        <Link to={`/planet/${a.name}`} key={i} className="main-box">
                            <div className ='main-info'>
                                <div className='main-img'>
                                    <img src={a.img?a.img:b} alt="" />
                                </div>
                                <div className='main-name'>
                                    <span className='name-name'>{a.name}</span>
                                </div>
                            </div>
                        </Link>
                    )
                }) 
            }
                <Link to='/add' className="main-box">
                    <div >
                        <div className='mian-jia'>
                            <img src={jiahao} alt="" />
                        </div>
                        <div className='main-name'>
                            <span className='name-name'>新建</span>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default Main;