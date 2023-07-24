import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [sm, setsm] = useState(false);

  return (
    <>
      <div></div>
      <div>
        <div className="flex justify-between items-center lg:hidden">
          <p className="z-10 relative lg:hidden text-white">
            <Link to="/" className="text-4xl">
              Anduril
            </Link>
          </p>
          <div className="text-white flex justify-end">
            <div className="z-10">
              <button
                type="button"
                className="text-white p-2 lg:hidden z-10 relative transform transition-transform duration-500"
                onClick={() => setIsOpen(!isOpen)}
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
              className={`grid grid-flow-row gap-4 lg:hidden lg:justify-between lg:gap-0 z-10 relative ${
                isOpen ? "block" : "hidden"
              } lg:block`}
            >
              <li className="text-white bg-black">
                Something should drop under
              </li>
            </ul>
          </div>
        </div>
        <div className="md:hidden">
          <ul className="z-10 relative justify-between bg-transparent border-b-2 border-r-2 border-l-2 hidden md:flex">
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
      </div>
    </>
  );
}
