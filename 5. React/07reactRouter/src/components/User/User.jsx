import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  // wherever element is loading should be same as taken in main.jsx
  // useParams hook to fetch values from that dynamic value
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User