import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [num, setNum] = useState(0)

  const increaceNum= ()=>{
    setNum(num+1)
  }
  
  const decreaceNum= ()=>{
    setNum(num-1)
  }

  return (
    <div className='m-3 p-4'>
      <h1 className='font-bold text-2xl mb-4'>Counter App</h1>
        <div className='bg-gray-300 w-70 h-30 flex items-center justify-center font-bold text-6xl'>{num}</div>
        <button className='bg-amber-200 text-2xl font-medium px-5 py-2 my-3 mr-3 rounded-2xl' onClick={increaceNum}>Increase</button>
        <button className='bg-amber-200 text-2xl font-medium px-5 py-2 my-3 rounded-2xl' onClick={decreaceNum}>Decrease</button>
    </div>
  )
}

export default App