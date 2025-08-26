import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounterProvider } from './Context/CounterContext'
import CounterComponent from './Component/CounterComponent'

function App() {
  const [counter, setCounter] = useState(0)
   
  const incrementBtn = () => setCounter((prev)=> prev+1)
  const decrementBtn = () => setCounter((prev)=> (prev > 0 ? prev-1 : 0))
  const resetBtn = () => setCounter(0)

  return (
    <CounterProvider value={{Counter: counter,incrementBtn,decrementBtn,resetBtn}}>
      <h1>Counter Using Context API</h1>
      <CounterComponent />
    </CounterProvider>
  )
}

export default App
