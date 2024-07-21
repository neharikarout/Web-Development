import React from 'react';
import PropDrilling from './components/PropDrilling';


function App() {

const data = [
  {name: "John", profession:"painter" , image:"https://images.unsplash.com/photo-1595523052653-b9f497845c3d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Amit", profession:"Artist" , image:"https://images.unsplash.com/photo-1658314756129-5b27f344b65b?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Carie", profession:"Designer" , image:"https://images.unsplash.com/photo-1598387746216-506f6bd47aad?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {name: "Kim", profession:"Model" , image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
]


  return (
    <>
    <div className='w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center'>
     {data.map((item,index)=>(
      <PropDrilling image={item.image} name={item.name} profession={item.profession} />
     ))}
     </div>
    </> 
  )
}

export default App;