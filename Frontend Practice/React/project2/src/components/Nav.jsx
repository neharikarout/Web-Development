import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="mt-10 flex items-center justify-center gap-10 bg-zinc-300 ">
      {/* <a href="/home">Home</a> */}
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
          };
        }}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={(e)=>{
          return [
            e.isActive ? "text-red-600" : "",
            e.isActive ? "font-semibold"  : ""
          ].join(" ")
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink to="/about">
        {(e)=>{
          return <span className={[ e.isActive ? "text-red-600" : "",
            e.isActive ? "font-semibold"  : ""
          ].join(" ")}
         >
          About</span>
        }}
           
      </NavLink>
    </nav>
  );
}

export default Nav;
