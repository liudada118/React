import React, { useEffect, useState, useMemo, useCallback, } from 'react'

let arr = []
let set = new Set()  //无重复数据集 约等于数组 不用进数组 相同就忽略
function Demo() {
    
    console.log('render')
    const [inputVal, setVal] = useState('海阔天空')
    const [listVal, setList] = useState('')
    // const handerChange = (event) => {
    //     setVal(event.target.value)
    // }
    const handerChange = useCallback((event) => {
        setVal(event.target.value)
    })
    useEffect(()=>{
        fetch('http://neteasecloudmusicapi.zhaoboy.com/search?keywords='+ 
        inputVal
        )
        .then(res => res.json())
        .then((res)=>{
            setList(res.result.songs)
        })
        return() =>{
            // 卸载
        }
    },[])
    // 没有[]  死循环
    // [] 里面传的值一样就不会执行fetch了 ,不传值就不会刷新
    // [] 执行一次 componentDidMount
    // [inputVal] 执行多次 componnetDidUpdate
    //  [] => 依赖 react检查依赖里面有没有数据发生变化，没变化就不会重新调用
    // // 当setVal执行时  函数会重新执行
    // arr ++
    // 缓存的时候检查依赖，只有依赖没有变化才会使用上次的值
    let set1 = new Set([1,1,1,1])
    console.log([...set1])
    let val = useMemo(() => { //此语句会缓存上一步
        return [1,2]
    },[])
    set.add(val)
    arr.push(val)
    console.log(set.size,arr.length)
    // val = val*2
    
    // console.log(val)
    // // console.log (val === arr)
    // console.log(arr)
    // console.log(listVal.length?1:0)
    return (
        <div>
            {listVal.length}
            <input type="text" value={inputVal} onChange={handerChange} />
        </div>
    )
}





export default Demo