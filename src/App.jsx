import { useCallback,useEffect,useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength]=useState(5);
  const[num,setNum] = useState(false);
  const [charAllowed,useCharAllowed] = useState(false);
  const [password,changePassword] = useState("")
  const passwordRef=(null);

  const passwordGenerator= useCallback(()=>{
    let pass = ""
    let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(num){
      str+="0123456789"
    }

    if(charAllowed){
      str+="@#${}*%[]()"
    }

    for(let i=1;i<=length;i++){
      let char = Math.floor(Math.random()*str.length+1)

      pass+= str.charAt(char)
    }
    changePassword(pass)

  },[length,num,charAllowed,changePassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setselectionRange();
    window.navigator.clipboard.writeText(password)},[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,num,charAllowed,passwordGenerator])

  return (
    <>
      
      <div className='w-full justify-center max-w-fit mx-auto shadow-lg rounded-md px-4 p-3 bg-slate-500 text-white'>
        <h1 className='text-gray-800 text-center my-3'>Password Manager</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type='text' value={password}
          className='text-black outline-none w-full px-3 py-1  gap-2'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-neutral-700 text-white px-2 py-1 rounded-none'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={5}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}></input>
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={num}
            id="numberInput"
            onChange={(e)=>{setNum((prev)=>!prev)}}></input>
          </div>
          <label
          htmlFor='numberInput'>Number</label>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed}
            id="characterInput"
            onChange={(e)=>{useCharAllowed((prev)=>!prev)}}></input>
          </div>
          <label
          htmlFor='characterInput'>Character</label>
        </div>
      </div>
    </>
  )
}

export default App
