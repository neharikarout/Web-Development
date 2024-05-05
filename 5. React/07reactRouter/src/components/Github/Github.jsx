import React, { useEffect ,useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
   const data = useLoaderData()
    // const [data,setData] = useState([]);
    
    // when we have to load something
    // useEffect (() => {
    //     fetch('https://api.github.com/users/neharikarout')
    //     .then(response => response.json()) // string to json
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers : {data.followers} 
      <img src = {data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/neharikarout')
  return response.json()
}

//now you can comment useEffect
// useLoader keep data in cache for fast rendering
