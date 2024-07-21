import React from 'react'

function PropsEx({text,color}) {
  return (
    <div className='p-10 flex gap-10  '>
      <button className={`px-3 py-1 ${color} rounded text-white text-xs`}>{text}</button>
    </div>
  )
}

export default PropsEx
