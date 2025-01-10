import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter,setCounter] = useState(0)
  
  //let counter = 1

  const addValue=()=>{
    console.log("Value added",counter);
    //counter=counter+1;
    setCounter(counter+1)
    
  }
  const removeValue=function(){
    setCounter(counter-1)
    if(counter===0 || counter<0){
      // console.log("Its is the minimum");
      setCounter(0)
      
    }
  }

  return (
    <>
    <h1>Counter</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br/><br/>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
