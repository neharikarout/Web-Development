import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetail() {
  const { name } = useParams();
  const navigate = useNavigate();

  const gobackHandler = () => {
    //navigate("/user");
    navigate(-1)

  }

  return (
    <div className="w-full h-screen m-auto mt-10 ">
      <h1 className="p-4 text-5xl ">Users</h1>

      <h1 className=" p-6 text-3xl">Hi, {name}</h1>
      <button onClick={gobackHandler} className="ml-5 px-3 py-1 bg-blue-500 rounded-full mt-5 text-xs text-white">
        Go Back
      </button>
    </div>
  );
}

export default UserDetail;
