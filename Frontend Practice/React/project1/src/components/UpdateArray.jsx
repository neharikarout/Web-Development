import React, { useState } from "react";

function UpdateArray() {
  const [val, setVal] = useState([
    {name: "payal" , age:20},
    {name: "naira", age: 15},
    {name: "shivam" , age:18},
  ]);
   
  // to delete something
  //  <button onClick={()=>setVal(()=>val.filter((item,index)=> index!=val.length-1))}
  
  // adding something to array
  //<button onClick={() =>setVal([...val,7])}
  return (
    <div className="p-4">
      {val.map((item) => (
      <div>
        <h1>{item.name}</h1>
        <h2>{item.age}</h2>
      </div>
    ))}
      <button onClick={() =>setVal(()=>val.map((item)=> item.name === "shivam" ? ({name: "shivam",age: 26}) : item))}
      className="px-2 py-1 rounded-full bg-blue-600 text-white text-xs"
      >
        Delete
      </button>
    </div>
  );
}

export default UpdateArray;
