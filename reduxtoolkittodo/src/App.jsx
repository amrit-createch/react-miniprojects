import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './Components/AddToDo'
import Todos from './Components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Todos Using Redux Toolkit</h1>
     <AddTodo/>
     <Todos/>
    </>
  )
}

export default App
