import { Component, useState } from 'react'
import './App.css'
import Cards from './Components/cards'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-400 text-3xl font-bold p-4 rounded-3xl'>Welcome to React</h1>
      <Cards username = "Naveen Sen" butttxt="Submit" />
      <Cards username="Navin"/>
      </>
  )
}

export default App
