import React, { useState } from 'react'
import './App.css'
import { Smile } from './Smile'
// import { FaceComponent } from '../../01-use-state/src/Demo'
export default function App() {
  const [level, setLevel] = useState(300)
  // console.log(level)
  return (
    <div>
      <input type="range"
        min={0}
        max={500}
        value={level}
        onChange={(e) => { setLevel(e.target.value) }}
      />
      <p>{level}</p>
      <Smile level={level} />
    </div>
  )
}
