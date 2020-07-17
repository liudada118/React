import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ShopHeader extends Component {
    state = {
        infos:[{
            id:1,
            name:'点菜',
            type:'order'
        },
        {
            id:2,
            name:'评价',
            type:'comment'
        },
        {
            id:3,
            name:'店家',
            type:'business'
        },],
        foodInfos:[
            {
                food : '',
                number : ''
            }
        ]
    }

    render() { 
        const { type } = this.props.prop.match.params
        return(
            <React.Fragment>
             <Link to='/'><div key='1' className='shop-header'><button>{`<`}</button></div></Link>
        <div className='shopList'>
                              
            {this.state.infos.map(info=>{
            return (
            // <div className='shop-foodlist' key={info.id} 
            // onClick={this.handleUrl.bind(this,`${match.url+'/order'}`)}
            // >{info.name}</div>
            
            <Link key={info.id} className='shop-foodlist' to={`${'/'+type+'/shopkeeper/'+info.type}`}>
                <div className='shop-foodlist' key={info.id} 
            >{info.name}</div>
            </Link>
            )
        })}
        </div>
        </React.Fragment>
        )
        
    }
}
// catchUrl(url){
//     this.props.history.push
// }
export default ShopHeader;