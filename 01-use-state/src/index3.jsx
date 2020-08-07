import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import {FaceComponent} from './Demo'
function App() {
    const [satisfactionLevel, setSatisfactionLevel] = useState(300)
    const changeSatisfactionLevel = (e)=>{
        setSatisfactionLevel(+e.target.value)
        let a = satisfactionLevel/100
        setLevel(a)
    }
    const [level , setLevel] = useState(3)
    
    console.log(level)
    return (
        <div className='App'>
            <input
                min='0'
                max='500'
                type="range"
                value={satisfactionLevel}
                onChange={(e)=>{changeSatisfactionLevel(e)}}
            />
            <br />
            <span>{satisfactionLevel}</span>
            <br/>
            <FaceComponent level={level} />
        </div>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
