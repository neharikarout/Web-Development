import React from 'react'

function PropDrilling({values,index,handleClick}) {
  const {name,profession,image,friends} = values;
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden '>
        <div className='w-full h-32 bg-sky-200'>
        <img className='w-full h-full object-cover object-[center_top] ' src={image}></img>
        </div>
        <div className='w-full p-3'>
            <h3 className='font-semibold'>{name}</h3>
            <h5>{profession}</h5>
            <button onClick={()=>handleClick(index)} className={`px-3 py-1 text-xs text-white ${friends? 'bg-green-600': 'bg-blue-600'} font-semibold rounded-md`}>{friends? "Friends" : "Add a friend"}</button>
        </div>



      
    </div>
  )
}

export default PropDrilling
