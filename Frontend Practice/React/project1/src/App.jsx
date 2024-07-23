import React, { useRef, useState } from 'react';
import {useForm} from 'react-hook-form'



function App() {

  const {register,handleSubmit} = useForm();
  

  return (
    <>
     <form action='' onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register('name')} placeholder='name' type='text'/>
      <input {...register('email')} placeholder='email' type='text'/>
      <input type='submit' />
     </form>
    </> 
  )
}

export default App;