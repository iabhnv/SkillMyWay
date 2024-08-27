import React from "react";
// props
// {isAuth,isHomeActive,isStoriesActive,isPathActive}
function Navbar() {
  return (
    <div className="max-w-screen-2xl">
      <div className="navbar bg-slate-50 justify-between">
        <div className="navbar-start">
          <div className="dropdown w-8 ">
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
          <div className="flex flex-col mx-0 ">
            <a className="btn btn-ghost text-xl flex flex-col">
              <img className="h-6 sm:h-8" src="/SMWlogo.png" alt="Logo" />
            </a>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
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
        <div className="navbar-end w-0 md:w-24 mx-4 mr-2 sm:mr-8">
          <a className="btn text-slate-50 bg-teal-800 text-sm sm:text-lg hover:bg-teal-900 border-none font-thin w-24 sm:w-auto">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
