import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Songs from './components/Songs';


function App() {

  const data= [
    {img:"https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0fGVufDB8fDB8fHww", name:"Take Two", artist:"Bangtan", added: false},
    {img:"https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0fGVufDB8fDB8fHww", name:"Closer Than This", artist:"JM", added: true},
    {img:"https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0fGVufDB8fDB8fHww", name:"Rockstar", artist:"Lisa", added: false},
    {img:"https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0fGVufDB8fDB8fHww", name:"Spot", artist:"Zico & Jennie", added: false},
    {img:"https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0fGVufDB8fDB8fHww", name:"Super", artist:"Seventeen", added: false},
    {img:"https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0fGVufDB8fDB8fHww", name:"Small Girl", artist:"LYJ", added: true},
    {img:"https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFic3RyYWN0fGVufDB8fDB8fHww", name:"Lost", artist:"RM", added: false},
  ]

  const[songData , setSongData] = useState(data);
  const handleClick = (index)=> {
    setSongData((prev)=>{
      return prev.map((item,itemIndex)=>{
        if(itemIndex === index) return{...item,added: !item.added}
        return item;

      })
    })
  }

  
  

  return (
    <>
      <div className='w-full h-full bg-zinc-300  p-4 '>
        <Navbar data={songData}/>
         <div className='px-20 flex gap-10 mt-10 flex-wrap'>
         {songData.map((obj,index)=>{
          return <Songs key={index} data={obj} handleClick={handleClick}  index={index}/>
         })}
         </div>
        
      </div>
    </> 
  )
}

export default App;