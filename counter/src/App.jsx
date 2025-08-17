import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  function increaseValue(){
     if(counter < 100){
    setCounter(counter+1)
    }
  }

   function decreaseValue(){
     if(counter > 0){
    setCounter(counter-1)
    }
  }


  return (
    <>
    <h1 >Counter App</h1>
    <br />
    <h2 >Counter Value: {counter}</h2>
    <br />
    <button className='bg-green-500' onClick={increaseValue}>Increase Counter</button>
    <br />
    <br />
    
    <button className='bg-red-500'onClick={decreaseValue}>Decrease Counter</button>
    
    </>
  )
}

export default App
