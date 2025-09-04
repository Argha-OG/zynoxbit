import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/zynox.png";

const Navbar = () => {
  return (
    <header className="bg-white top-0 sticky shadow-2xl z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <NavLink to="/" className="block text-teal-600">
              <span className="sr-only">Home</span>
              <img className="h-14" src={logo} alt="Logo" />
            </NavLink>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li><NavLink to="/" className="text-gray-500 hover:text-black">Home</NavLink></li>
                <li><NavLink to="/about" className="text-gray-500 hover:text-black">About</NavLink></li>
                <li><NavLink to="/career" className="text-gray-500 hover:text-black">Career</NavLink></li>
                <li><NavLink to="/services" className="text-gray-500 hover:text-black">Services</NavLink></li>
                <li><NavLink to="/projects" className="text-gray-500 hover:text-black">Projects</NavLink></li>
                <li><NavLink to="/blog" className="text-gray-500 hover:text-black">Blog</NavLink></li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <NavLink
                to="/login"
                className="rounded-md bg-black px-5 py-2.5 text-sm font-medium text-white shadow-sm"
              >
                Login
              </NavLink>
              <div className="hidden sm:flex">
                <NavLink
                  to="/register"
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-black"
                >
                  Register
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
