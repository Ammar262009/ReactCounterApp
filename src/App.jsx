import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [num, setNum] = useState(0)

  const increase = () => {
    setNum(num+1)
  }

  const decrease = () => {
    setNum(num-1)
  }

  return (
    <div className='h-screen w-full bg-gray-800  text-white'>
      <h2 className='p-5'>Counter App</h2>
      <div className='m-3 w-30 rounded text-center justify-center items-center flex h-30 bg-amber-400 text-black font-bold text-3xl'>{num}</div>
      <div className='flex gap-3 p-6'>
        <button onClick={decrease} className='bg-emerald-700 text-white px-5 rounded py-3'>Decrease</button>
        <button onClick={increase} className='bg-emerald-700 text-white px-5 rounded py-3'>Increase</button>
      </div>
    </div>
  )
}

export default App