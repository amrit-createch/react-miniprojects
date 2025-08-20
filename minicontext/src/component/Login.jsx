import React from 'react'
import { useContext,useState } from 'react'
import userContext from '../Context/UserContext'

function Login() {
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

    const contextValue = useContext(userContext)
    const {setUser} = contextValue || {};

    function handlesubmit(e) {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div>
            <h2>login</h2>
            <input type="text" 
            placeholder='username' 
            value={username}
            onChange={(e)=> setusername(e.target.value)}
            />

             <input type="text" 
             placeholder='password'
              value={password}
            onChange={(e)=> setpassword(e.target.value)}/>
             <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}

export default Login
