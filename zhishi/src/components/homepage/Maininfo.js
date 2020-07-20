import React, { Component } from 'react';
class Maininfo extends Component {
    state = {  }
    render() { 
        console.log(this.props)
        return ( <div>
            欢迎来到{this.props.match.params.name}的星球
        </div> );
    }
}
 
export default Maininfo;