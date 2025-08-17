import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
      <div className='w-full h-screen duration-200' 
      style={{backgroundColor: color}}>
        <div className='bottom-12 text-white bg-gray-600 flex flex-wrap justify-center'>
        <div className='gap-3 rounded-lg bg-gray-600 flex flex-wrap justify-center'>
          <button onClick={()=>setColor("red")} className='outline-none' style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>setColor("blue")} className='outline-none' style={{backgroundColor:"blue"}}>blue</button>
          <button onClick={()=>setColor("green")} className='outline-none' style={{backgroundColor:"green"}}>green</button>
          <button onClick={()=>setColor("yellow")} className='outline-none' style={{backgroundColor:"yellow"}}>yellow</button>
          <button onClick={()=>setColor("purple")} className='outline-none' style={{backgroundColor:"purple"}}>purple</button>
          <button onClick={()=>setColor("white")} className='outline-none' style={{backgroundColor:"white"}}>white</button>
          <button onClick={()=>setColor("pink")} className='outline-none' style={{backgroundColor:"pink"}}> pink</button>


        </div>
        </div>
      </div>
    </>
  )
}

export default App
