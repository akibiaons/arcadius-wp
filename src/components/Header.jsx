import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="block lg:hidden">
        {/* This will show on mobile and tablets */}
        <div className="flex justify-between items-center relative z-10 bg-black p-4">
          <p className="text-white">
            <Link to="/" className="text-4xl">
              Anduril
            </Link>
          </p>
          <div className="text-white flex justify-end">
            <div className="z-10">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 z-10 relative transform transition-transform duration-500"
                style={{
                  transform: isOpen ? "rotate(270deg)" : "rotate(0deg)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            <ul
              className={`absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform bg-black text-white ${
                isOpen ? "translate-y-0 opacity-100" : "opacity-0"
              }`}
            >
              <li className="p-4 border-b border-white">
                Something should drop under
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        {" "}
        {/* This will show on laptops and desktops */}
        <ul className="z-10 relative justify-between bg-transparent border-b-2 border-r-2 border-l-2 flex">
          <li className="text-lg border-r-2 pr-10 py-10">
            <Link to="/">Anduril</Link>
          </li>
          <li className="relative group" onMouseEnter={() => setIsOpen(true)}>
            <Link to="/hive" className="inline-block py-10">
              H.I.V.E Program
            </Link>
            {isOpen && (
              <ul
                className="absolute left-0 mt-1 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50"
                onMouseLeave={() => setIsOpen(false)}
              >
                <li className="px-4 py-3">
                  <Link
                    to="/hive/submenu1"
                    className="text-gray-700 hover:text-gray-900 cursor-pointer"
                  >
                    Command & Control
                  </Link>
                </li>
                <li className="px-4 py-3">
                  <Link
                    to="/hive/submenu2"
                    className="text-gray-700 hover:text-gray-900 cursor-pointer"
                  >
                    Mission Autonomy
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/air-security" className="inline-block py-10">
              Air Security
            </Link>
          </li>
          <li>
            <Link to="/maritime-security" className="inline-block py-10">
              Maritime Security
            </Link>
          </li>
          <li>
            <Link to="hiring" className="inline-block py-10 border-l-2">
              We're Hiring
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
