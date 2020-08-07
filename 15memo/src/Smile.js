import React from 'react'
import { memo } from 'react'

const setSmileClass = (level) => {
    if (level < 100) {
        return 'a'
    }
    if (level < 200) {
        return 'b'
    }
    if (level < 300) {
        return 'c'
    }
    if (level < 400) {
        return 'd'
    }
    return 'e'
}

const isSameRange = (prevValue, nextValue) => {
    const prevValueClass = setSmileClass(prevValue)
    const nextValueClass = setSmileClass(nextValue)
    return prevValueClass === nextValueClass
}

export const Smile = memo(props => {
    const { level } = props
    console.log(level,props)
    return (
        <div className={setSmileClass(level)}></div>
    )
}, isSameRange)

// import React, { memo } from 'react'

// const setSatisfactionClass = level => {
//   if (level < 100) {
//     return "very-dissatisfied"
//   }
//   if (level < 200) {
//     return "somewhat-dissatisfied"
//   }
//   if (level < 300) {
//     return "neither"
//   }
//   if (level < 400) {
//     return "somewhat-satisfied"
//   }
//   return "very-satisfied"
// }

// const isSameRange = (prevValue, nextValue) => {
//   const prevValueClass = setSatisfactionClass(
//     prevValue.level);
//   const nextValueClass = setSatisfactionClass(
//     nextValue.level);
//   return prevValueClass === nextValueClass
// }

// export const FaceComponent = memo(props => {
//     const  {level} = props
//     console.log('渲染了')
//     return(
//         <div className={setSatisfactionClass(level)}></div>
//     )
// }, isSameRange)