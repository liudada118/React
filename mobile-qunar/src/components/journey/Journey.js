import React from 'react';
import PropsTypes from 'prop-types'
import switchImg from '../../img/1.png'
export default function Journey(props) {
    console.log(props)
    let { from, to, exchangeFromTo } = props
    return (
        // <div>
        //     {from} <div onClick={()=>exchangeFromTo()}>222</div>{to}
        // </div>

        <div className="Journey">
            <div className="Journey-station">
                <input type="text" className="Journey-input" 
                readOnly  
                value={from} />
            </div>
            <div className="Journey-Switch" onClick={exchangeFromTo}>
                <img src={switchImg } alt="" />
            </div>
            <div className="Journey-station">
                <input type="text" className="Journey-input" readOnly value={to} />
            </div>
        </div>
    )
}
Journey.propsTypes = {
    from: PropsTypes.string.isRequired,
    to: PropsTypes.string.isRequired
}