import { useState,useCallback , useEffect,useRef, useReducer} from 'react'


function App() {
  const [length, setlength] = useState(8)
  const [numAllowed,setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")
  

 const passwordRef=useRef(null)


  let passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) str+="0123456789"
    if(charAllowed) str+="@#$%&*^{}()[]`><:;"

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass+=str.charAt(char)
    }

    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])

const copyPassword=useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,10)
  window.navigator.clipboard.writeText(password)

},[password])


 useEffect(()=>{
  passwordGenerator()
 },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500  bg-gray-700'>
      <h1 className='text-white text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button  onClick={copyPassword} className='outline-none py-0.5 px-3 bg-blue-700 text-white shrink-0'>copy</button>
        
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={8}
          max={20}
          value={length}
          className='cursor-pointer' 
          onChange={(e) => setlength(e.target.value)}
          />
          <label>length:{length}</label>
        </div>
          <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numAllowed}
          id="numberInput"
          onChange={() => {
              setNumAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
     </div>
    
  )
}

export default App
