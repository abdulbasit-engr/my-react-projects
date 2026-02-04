import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")
  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center left-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center bg-gray-700 outline-gray-600 gap-3 px-3 py-2 shadow-lg rounded-3xl'>
        <button
        onClick={()=> setColor("red")}
        className='outline-none px-4 text-white py-1 rounded-full shadow-lg'
            style={{ backgroundColor: "red" }}
        >Red</button>
        <button
        onClick={()=> setColor("blue")}
        className='outline-none px-4 text-white py-1 rounded-full shadow-lg'
            style={{ backgroundColor: "blue" }}
        >Blue</button>
        <button
        onClick={()=> setColor("gray")}
        className='outline-none px-4 text-white py-1 rounded-full shadow-lg'
            style={{ backgroundColor: "gray" }}
        >Gray</button>
        </div>

      </div>
    </div>
  )
}

export default App