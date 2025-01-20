import { useState } from 'react'
import './App.css'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'

function App() {
  
  return (
    <>
      <h1 className='bg-stone-600 text-3xl font-bold p-4 rounded-sm-3xl text-red-200'>TODO MANAGER</h1>
      <AddTodo/>
      <Todos/>

    </>
  )
}

export default App
