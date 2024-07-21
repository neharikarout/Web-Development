import React, {useState} from 'react'

function UseStateEx() {
    const [val,setVal] = useState(12);
  return (
    <div className='p-4 flex flex-col'>
      <h1 className=' items-center justify-center'>{val}</h1>
      <button onClick={()=>setVal((prev)=>prev+1)} className=' w-40 items-center justify-center mt-4 px-3 py-1 bg-blue-500 rounded-full'>Change Karo</button>
      
      
    </div>
  )
}

export default UseStateEx
