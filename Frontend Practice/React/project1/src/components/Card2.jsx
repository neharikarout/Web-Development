import React from 'react'

function Card2() {

    const data = [
        {name: "Who", description:"Who , focus track of muse . Released on 19 july 2024 . The singer of the song is Jimin."},
        {name: "Astronaut",description:"Album single of Astronaut . Released on December 2022 . The singer is Jin"},
        {name: "Lost", description: "track of the album RPWP . Released on june 2024. The singer of the album is RM"},
    ]

    const handleClickDownload = function(){
        alert('Downloading');
    }
  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center'>
       { data.map((elem,index)=>(
            <div key='index' className='w-60 px-3 py-2 bg-zinc-100'>
            <h3 className='font-semibold text-xl'>{elem.name}</h3>
            <p className='text-xs mt-2 text-wrap'>{elem.description}</p>
            <button onClick={handleClickDownload} className='px-2 py-1 bg-lime-500 rounded-md mt-3 font-semibold '>Download</button>
        </div> 
        ))
}
        
    </div>
  )
}

export default Card2
