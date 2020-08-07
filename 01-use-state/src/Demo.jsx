import React, { memo } from 'react'

const setSatisfactionClass = level => {
  if (level < 100) {
    return "very-dissatisfied"
  }
  if (level < 200) {
    return "somewhat-dissatisfied"
  }
  if (level < 300) {
    return "neither"
  }
  if (level < 400) {
    return "somewhat-satisfied"
  }
  return "very-satisfied"
}

const isSameRange = (prevValue, nextValue) => {
  const prevValueClass = setSatisfactionClass(
    prevValue.level);
  const nextValueClass = setSatisfactionClass(
    nextValue.level);
  return prevValueClass === nextValueClass
}

export const FaceComponent = memo(props => {
    const  {level} = props
    console.log('渲染了')
    return(
        <div className={setSatisfactionClass(level)}></div>
    )
}, isSameRange)


// import React, {memo, useState, useEffect } from 'react'
// export const 
// export const MyComponent = () => {
//     const [filter, setFilter] = useState('')
//     const [userCollection, setUserCollection] = useState([])
//     useEffect(() => {
//         fetch(``)
//             .then(res => res.json())
//             .then(json => setUserCollection(json))
//     }, [filter])
//     return (
//         <div>
//             <input type="text" value={filter} onChange={(e) => { setFilter(e.target.value) }} name="" id="" />
//             <ul>
//                 {
//                     userCollection.map((user, index) => 
//                         <li key={index}>{user.name}</li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }


// import React, {memo, useState, useEffect } from 'react'
// export const MyComponent = ()=>{
//     const [userInfo , setUserInfo] = useState({
//         name : 'jhon',
//         lasename : 'doe'
//     })
//     return (
//         <>
//         {/* < */}
//         <input type="text" value={userInfo.name} onChange={e => setUserInfo({...userInfo, name : e.target.value} )} name="" id=""/>
//         </>
//     )
// }
