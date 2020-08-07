// import React from 'react'

// export default function Singers() {
//     return (
//         <div>

//         </div>
//     )
// }

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavContainer } from './style'
import { categoryTypes, alphaTypes } from '../../api/config'
export const Singer = () => {
    const handleUpdataCategory = (v) =>{
        
    }
    const handleUpdataAlpha = (v) =>{

    }
    return (
        <div>
            <NavContainer>
                <Horizen title="分类" list={categoryTypes} 
                handleClick = { (v)=>{ handleUpdataCategory(v) }}
                />
                <Horizen title="首字母" list={alphaTypes}
                handleClick = { (v)=>{ handleUpdataAlpha(v)}} />
            </NavContainer>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(index))


