import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [heading, setHeading] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const copyTask = [...task]

  const deleteNote = (idx) => {
    const deleteTask = [...task]
    
    deleteTask.splice(idx, 1)
    setTask(deleteTask)
  }

  const sumbitHandler = (e) => {
    e.preventDefault();

    copyTask.push({ title: heading, desc: details })

    setTask(copyTask)

    setHeading('')
    setDetails('')
  }

  return (
    <div className='lg:flex bg-black overflow-hidden text-white h-screen w-full'>
      <form className='p-4 lg:w-1/2 lg:border-r-2'>
        <h1 className='font-bold text-2xl mb-4'>Add Note</h1>
        <div className='flex flex-col gap-5 font-medium'>
          <input
            className='border-2 rounded px-5 py-3 outline-none'
            value={heading}
            onChange={(e) => {
              setHeading(e.target.value)
            }}
            type="text"
            placeholder='Enter Your Note' id="" />
          <textarea
            className='h-39 border-2 rounded px-5 py-3 outline-none'
            type="text"
            onChange={(e) => {
              setDetails(e.target.value)
            }}
            value={details}
            placeholder='Description' id="" />
          <button
            className='bg-white text-black px-5 py-3 rounded outline-none'
            onClick={(e) => {
              sumbitHandler(e)
            }}>Add</button>
        </div>
      </form>
      <div className='p-4 lg:w-1/2'>
        <h1 className='font-bold text-2xl mb-4'>Recent Note</h1>
        <div className='flex gap-3 flex-wrap items-start h-[90%] overflow-auto'>
          {task.map(function name(elem, idx) {
            return <div key={idx} className='w-45 p-4 flex justify-between flex-col bg-top-right h-53 bg-white text-black rounded-2xl shrink-0 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf3bUzcfjXEgpNynCGXAL2naN49al7QDepIQ&s)]'>
              <div >
                <h2 className='font-bold text-black'>{elem.title}</h2>
                <p className='font-medium text-gray-700'>{elem.desc}</p>

              </div>
              <button onClick={() => {
                deleteNote(idx)
              }} className='text-white active:scale-95 bg-red-400 rounded-2xl p-1'>Delete</button>
            </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default App