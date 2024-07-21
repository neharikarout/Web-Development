import React, { useState } from "react";

function UseStateAdv() {
  const [val, setVal] = useState({ name: "Neharika", isBanned: false });
  return (
    <div className="p-4">
      <h1>Name: {val.name}</h1>
      <h2>Banned: {val.isBanned.toString()}</h2>
      <button
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
        className={`mt-4 px-3 py-1 ${
          val.isBanned ? "bg-red-500" : "bg-blue-500"
        } rounded-full text-white`}
      >
        Change
      </button>
    </div>
  );
}

export default UseStateAdv;
