import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenu2Open, setIsSubMenu2Open] = useState(false);
  const [isSubMenu3Open, setIsSubMenu3Open] = useState(false);
  const [isSubMenu4Open, setIsSubMenu4Open] = useState(false);
  const [isSubMenu5Open, setIsSubMenu5Open] = useState(false);
  const [isSubMenu6Open, setIsSubMenu6Open] = useState(false);
  const [isSubMenu7Open, setIsSubMenu7Open] = useState(false);
  const [isSubMenu8Open, setIsSubMenu8Open] = useState(false);

  return (
    <>
      <div className="block lg:hidden">
        {/* This will show on mobile and tablets */}
        <div
          className={`flex justify-between items-center relative z-10 p-4 ${
            isOpen
              ? "bg-black ease-in-out transition"
              : "bg-transparent ease-in-out transition"
          }`}
        >
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
                className="text-white p-2 z-10 relative transform transition-transform duration-500 bg-black"
                style={{
                  transform: isOpen ? "rotate(270deg)" : "rotate(0deg)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-8 w-8"
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
            <div>
              {/* THE START OF THE SUB MENUS */}
              <ul
                className={`absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform bg-black text-white ${
                  isOpen ? "translate-y-0 opacity-100" : "opacity-0"
                }`}
              >
                <div className="z-10 flex justify-between">
                  {/* DIV of submenu 1 "Lattice Solutions" */}
                  <li className="p-4 border-b border-gray-500">
                    Lattice Solutions
                  </li>
                  <button
                    type="button"
                    onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                    className="text-white p-2 z-10 relative transform transition-transform duration-500"
                    style={{
                      transform: isSubMenuOpen
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
                {/*End of div 1 lattice solutions */}
                {/* Start of div 2 Force Protections */}
                <div className="z-10 flex justify-between">
                  <li className="p-4 border-b border-gray-500">
                    Force Protection
                  </li>
                  <button
                    type="button"
                    onClick={() => setIsSubMenu2Open(!isSubMenu2Open)}
                    className="text-white p-2 z-10 relative transform transition-transform duration-500"
                    style={{
                      transform: isSubMenu2Open
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
                {/* End of div 2 For force protection */}
                {/* Start of div 3 Air Systems */}
                <div className="z-10 flex justify-between">
                  <li className="p-4 border-b border-gray-500">Air Systems</li>
                  <button
                    type="button"
                    onClick={() => setIsSubMenu3Open(!isSubMenu3Open)}
                    className="text-white p-2 z-10 relative transform transition-transform duration-500"
                    style={{
                      transform: isSubMenu3Open
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
                {/* End of div 3 Air Systems */}
                {/* Start of div 4 underwater vehicles */}
                <div className="z-10 flex justify-between">
                  <li className="p-4 border-b border-gray-500">
                    Underwater Vehicles
                  </li>
                  <button
                    type="button"
                    onClick={() => setIsSubMenu4Open(!isSubMenu4Open)}
                    className="text-white p-2 z-10 relative transform transition-transform duration-500"
                    style={{
                      transform: isSubMenu4Open
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
                {/* End of div 4 for underwater vehicles */}
                {/* Start of div 5 we're hiring */}
                <div className="z-10 flex justify-between">
                  <li className="p-4 border-b border-gray-500">We're Hiring</li>
                  <button
                    type="button"
                    onClick={() => setIsSubMenu5Open(!isSubMenu5Open)}
                    className="text-white p-2 z-10 relative transform transition-transform duration-500"
                    style={{
                      transform: isSubMenu5Open
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
                {/* End of div 5 for we're hiring */}
                {/* Start of div 6 for Mission sections */}
                <div className="z-10 flex justify-between">
                  <li className="p-4 border-b border-gray-500">Mission</li>
                  <button
                    type="button"
                    onClick={() => setIsSubMenu6Open(!isSubMenu6Open)}
                    className="text-white p-2 z-10 relative transform transition-transform duration-500"
                    style={{
                      transform: isSubMenu6Open
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
                {/* End of div 6 for Mission */}
                {/* Start of div 7 for Newsroom */}
                <div className="z-10 flex justify-between">
                  <li className="p-4 border-b border-gray-500">Newsroom</li>
                  <button
                    type="button"
                    onClick={() => setIsSubMenu7Open(!isSubMenu7Open)}
                    className="text-white p-2 z-10 relative transform transition-transform duration-500"
                    style={{
                      transform: isSubMenu7Open
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
                {/* End of div 7 for newsroom */}
                {/* End of div 8 for media */}
                <div className="z-10 flex justify-between">
                  <li className="p-4 border-b border-gray-500">Media</li>
                  <button
                    type="button"
                    onClick={() => setIsSubMenu8Open(!isSubMenu8Open)}
                    className="text-white p-2 z-10 relative transform transition-transform duration-500"
                    style={{
                      transform: isSubMenu8Open
                        ? "rotate(45deg)"
                        : "rotate(0deg)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-8 w-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </button>
                </div>
              </ul>
            </div>
            {/* THE END OF THE SUB MENU DROP DOWNS ON MOBILE */}
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
