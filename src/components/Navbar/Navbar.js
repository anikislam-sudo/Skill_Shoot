import React from "react";
import { Link } from "react-router-dom";
import logo from "/projects/Skill_shoot/task-app/src/assets/Logo (1).png";
import menu from "/projects/Skill_shoot/task-app/src/assets/ep_menu.png";

const Navbar = () => {
  const menuItems = (
    <>
      <li className="font-normal text-white hover:font-bold hover:text-white">
        <Link to="/">Home</Link>
      </li>
      <li className="font-normal text-white hover:font-bold hover:text-white">
        <Link to="/">Course</Link>
      </li>
      <li className="font-normal text-white hover:font-bold hover:text-white">
        <Link to="/">Subscribe</Link>
      </li>
      <li className="font-normal text-white hover:font-bold hover:text-white">
        <Link to="/">About</Link>
      </li>
      <li className="font-normal text-white hover:font-bold hover:text-white">
        <Link to="/">Testimoni</Link>
      </li>
    </>
  );

  return (
    <div className="w-full bg-Green">
      <div className="max-w-7xl mx-auto">
        <div className="navbar h-20 mb-12 pt-12 flex items-center justify-between">
          <div className="navbar-start">
            <Link className="btn btn-ghost normal-text text-xl" to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Dropdown only visible on mobile */}
          <div className="navbar-end lg:hidden flex justify-end">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost">
              <img src={menu} alt="" />
              </label>
              <ul
  tabIndex={0}
  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-Green text-black rounded-box w-52 absolute right-0 z-50"
>
  {menuItems}
</ul>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li className="font-semibold text-white hover:font-bold hover:text-white">
                <Link to="/login">Login</Link>
              </li>
              <li className="font-normal text-white hover:font-bold hover:text-white">
                <button className="btn-square rounded w-40 h-10 pl-12 bg-peach900">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
