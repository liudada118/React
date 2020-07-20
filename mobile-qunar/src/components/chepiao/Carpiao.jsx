import React, { Component } from 'react';
import axios from 'axios'
import '../../mock/date'
import '../../mock/date1'
class Carpiao extends Component {
    state = {
        chepiao: ''
    }
    componentDidMount(){
        let a = this.props.match.params.address
        console.log(a)
        axios.get(`/${a}`)
        .then(res => {
            console.log(res,res.data.chepiao)
            this.setState({
                chepiao : res.data.chepiao
            })
        })
    }
    render() {
        console.log(this.props)
        const {chepiao} = this.state
        // console.log(chepiao.checi)
        const {address} = this.props.match.params
        // console.log(chepiao.indexOf(address))
        // chepiao.filter((a)=>a.address == address)
        console.log(chepiao)
        let addressArr = address.split('-') 
        return (
            <div>
                {   chepiao?chepiao.checi.map((a ,i)=>{
                    console.log(a)
                       return(
                           <div key = {i}>
                               {addressArr[0]}{a.time}{addressArr[1]}
                           </div>
                       )
                   }) :null
                }
                {/* {chepiao.map((b)=>{
                    console.log(b.address,address,b.address == address,b.checi)
                    if(b.address == address){
                        return (
                            <div>
                                {b.checi.map((c)=>{
                                    console.log(c)
                                return <div>{c.time}
                                </div>
                                })}
                            </div>
                        )
                    }
                })} */}
            </div>
        );
    }
}

export default Carpiao;