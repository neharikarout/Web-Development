import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";

function Carausal() {

  const [val, setVal] = useState(false) 
  return (
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
        <div className='w-60 h-32 bg-zinc-500 rounded-md  relative flex overflow-hidden'>
            <img className={`shrink-0 ${val === false ? '-translate-x-[0%]': '-translate-x-[100%]'} transition-transform duration-600 ease-in-out w-full h-full object-cover`} src='https://images.unsplash.com/photo-1721297014353-538367ffa263?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            <img className={`shrink-0 ${val === false ? '-translate-x-[0%]': '-translate-x-[100%]'} transition-transform duration-600 ease-in-out w-full h-full object-cover`} src='https://images.unsplash.com/photo-1721404832661-658016cde3d4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
            <span onClick={()=>setVal(()=>!val)}
            className='w-10 h-7 bg-[#dadadaa8] flex items-center justify-center rounded-full absolute bottom-14 left-[30%] -translate-x-[-50%] -translate-y-[-50%]'>
               <FaArrowRight />
            </span>
        </div>
    </div>
  )
}

export default Carausal
