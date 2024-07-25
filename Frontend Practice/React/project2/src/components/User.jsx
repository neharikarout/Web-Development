import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <div className="w-full h-screen m-auto mt-10 ">
      <h1 className="p-4 text-5xl ">User</h1>

      <div className="flex w-1/2 flex-col mt-5">
        <Link
          className="p-3 rounded-md bg-red-200 text-2xl mb-3  hover:bg-red-300"
          to="/user/john"
        >
          John
        </Link>
        <Link
          className="p-3 rounded-md bg-red-200 text-2xl mb-3  hover:bg-red-300"
          to="/user/ayush"
        >
          Ayush
        </Link>
        <Link
          className="p-3 rounded-md bg-red-200 text-2xl mb-3  hover:bg-red-300"
          to="/user/anubhav"
        >
          Anubhav
        </Link>
      </div>

      <Outlet/>
    </div>
  );
}

export default User;
