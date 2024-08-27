import React from "react";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-slate-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-slate-50 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg "
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Stories</a>
              </li>
              <li>
                <a>Path</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mx-0 md:mx-3">
            <a className="btn btn-ghost text-xl flex flex-col">
              <img className="h-10" src="/SMWlogo.png" alt="Logo" />
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li>
              <a>Home</a>
            </li>
            
            <li>
              <a>Stories</a>
            </li>
            <li>
              <a>Path</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mx-4 md:mx-8">
          <a className="btn text-slate-50 bg-teal-800 text-lg hover:bg-teal-900 border-none font-thin">
            Sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
