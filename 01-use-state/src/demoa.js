// import React, { useEffect, useState, useRef } from 'react'



// export const MyComponent = () => {
//     const [seconds, setSeconds] = useState(0)
//     const [message, setMessage] = useState('')
//     // const [secondsRef] = useRef(seconds)

//     useEffect(() => {
//         setTimeout(() => {
//             console.log(seconds)
//             setSeconds(1)
//             // secondsRef.current = 1
//             // setMessage(`total seconds : ${secondsRef.current}`)s
//             setMessage(`total seconds : ${seconds}`)
//         }, 1000)
        
//     }, [])
//     useEffect(()=>{
//         setTimeout(() => {
            
//         }, 2000)
//     },[])
//     return (
//         <>
//             <div>{seconds}</div>
//             <div>{message}</div>
//         </>
//     )
// }

// import React, {useState, useRef, useEffect} from "react";
// export const MyComponent = () => {
//   const [visible, setVisible] = useState(false);
//   // mount unmount 
//   return (
//     <>
//       {visible && <MyChildComponent />}
//       <button onClick={() => setVisible(!visible)}>
//         Toggle Child component visibility: </button>
//     </>
//   )
// } 

// export const MyChildComponent = () => {
//   const [filter, setFilter] = useState("")
//   const [userCollection, setUserCollection] = useState([])
// const mountRef = useRef(false)
// useEffect(()=>{
//     mountRef.current = true
//     return ()=>{
//         mountRef.current = false 
//     }
// })
//   React.useEffect(() => {
//     setTimeout(() => {
//       fetch(
//         `https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
//         .then(response => response.json())
//         .then(json => {
//            setUserCollection(json)})
//     }, 2500)
//   }, [filter])

//   return (
//     <div>
//       <input type="text" value={filter} 
//       onChange={e => setFilter(e.target.value)}
//       />
//       <ul>
//         {
//           userCollection.map((user, index) => (
//             <li key={index}>{user.name}</li>
//           ))
//         }
//       </ul>
//     </div>
//   )
// }

// 数据再hook是怎么走的 ？

// usestate => context | reducer | usereducer

// import React from 'react'

// const userInfoReducer = (state , action) =>{
//     switch(action.type){
//         case 'setusername' : 
//             return (

//             )
//     }
// }
