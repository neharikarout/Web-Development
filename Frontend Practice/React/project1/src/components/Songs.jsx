import React from 'react'

function Songs({data,handleClick,index}) {
  const {img , name , artist , added} = data;
  return (
    <div className='w-60 h- h-40 bg-zinc-100 p-4 rounded-md flex gap-4 pb-10 relative'>
      <div className='w-20 h-20 bg-orange-600 rounded-md'>
        <img className='w-full h-full object-cover overflow-hidden' src={img} />
      </div>
      <div>
        <h3 className='text-xl  leading-none font-semibold'>{name}</h3>
        <h6 className='text-sm'>{artist}</h6>
      </div>
      <button onClick={()=>handleClick(index)} className={`mb-4 px-4 py-3 whitespace-nowrap ${added ? "bg-teal-600" : "bg-orange-600"} absolute bottom-0 left-1/2 -translate-x-[50%]  text-white text-xs rounded-full`}>{added ? 'added' : 'add to favourites'}</button>
    </div>
  )
}

export default Songs
