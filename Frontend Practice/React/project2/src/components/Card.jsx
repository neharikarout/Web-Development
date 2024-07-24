import React from 'react'

function Card({user, handleRemove ,id}) {
  return (
    <div className='w-52 h-52 bg-zinc-100 rounded-lg flex flex-col items-center p-2'>
      <div className='image w-[3vw] h-[vw] rounded-full bg-zinc-200 overflow-hidden'>
          <img className='w-full h-full object-cover' src={user.image} alt='' />
      </div>
      <h1 className='mt-1 text-xl text-center leading-none font-semibold'>{user.name}</h1>
      <h4 className='opacity-70 text-xs font-semibold'>{user.email}</h4>
      <button onClick={()=>handleRemove(id)} className='mt-2 px-3 py-1 bg-red-600 text-xs rounded-md font-semibold '>Remove It</button>
    </div>

  )
}

export default Card
