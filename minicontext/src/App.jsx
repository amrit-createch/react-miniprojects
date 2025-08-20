import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './Context/UserContextProvider'

function App() {
  

  return (
    <userContextProvider>
      <Login />
      <Profile />
    </userContextProvider>
  )
}

export default App
