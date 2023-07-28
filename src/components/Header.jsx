import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  {
    /*Below is the state and substates for desktop and larger screens */
  }
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [timeoutId2, setTimeoutId2] = useState(null);
  const [timeoutId3, setTimeoutId3] = useState(null);
  const [timeoutId4, setTimeoutId4] = useState(null);

  {
    /* Below are the states for mobile devices... */
  }
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [isSubMenu2Open, setIsSubMenu2Open] = useState(false);
  const [isSubMenu3Open, setIsSubMenu3Open] = useState(false);
  const [isSubMenu4Open, setIsSubMenu4Open] = useState(false);
  const [isSubMenu5Open, setIsSubMenu5Open] = useState(false);

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
                  isOpen ? "translate-y-0" : "translate-y-0 opacity-0"
                }`}
              >
                <div
                  className={`flex justify-between items-center p-4 border-b border-gray-500 relative ${
                    isSubMenuOpen ? "mb-16" : ""
                  }`}
                >
                  <div>
                    <p className="text-xl">Lattice Solutions</p>
                    <ul
                      className={`absolute left-0 w-full transition-all duration-300 ease-in-out transform bg-black text-white overflow-hidden ${
                        isSubMenuOpen
                          ? "flex flex-col max-h-[600px] opacity-100 border-b border-gray-500 mt-4 pl-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <li className="mb-4">Command & Control</li>
                      <li className="mb-4">Mission Autonomy</li>
                    </ul>
                  </div>
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
                <div
                  className={`flex justify-between items-center p-4 border-b border-gray-500 relative ${
                    isSubMenu2Open ? "mb-28" : ""
                  }`}
                >
                  <div>
                    <p className="text-xl">Force Protection</p>
                    <ul
                      className={`absolute left-0 w-full transition-all duration-300 ease-in-out transform bg-black text-white overflow-hidden ${
                        isSubMenu2Open
                          ? "flex flex-col max-h-[600px] opacity-100 border-b border-gray-500 mt-4 pl-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <li className="mb-4">Counter UAS</li>
                      <li className="mb-4">Counter Intrusion</li>
                      <li className="mb-4">Maritime Counter Intrusion</li>
                    </ul>
                  </div>
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
                <div
                  className={`flex justify-between items-center p-4 border-b border-gray-500 relative ${
                    isSubMenu3Open ? "mb-16" : ""
                  }`}
                >
                  <div>
                    <p className="text-xl">Air Systems</p>
                    <ul
                      className={`absolute left-0 w-full transition-all duration-300 ease-in-out transform bg-black text-white overflow-hidden ${
                        isSubMenu3Open
                          ? "flex flex-col max-h-[600px] opacity-100 border-b border-gray-500 mt-4 pl-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <li className="mb-4">Ghost</li>
                      <li className="mb-4">ALTIUS</li>
                    </ul>
                  </div>
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
                <div
                  className={`flex justify-between items-center p-4 border-b border-gray-500 relative ${
                    isSubMenu4Open ? "mb-8" : ""
                  }`}
                >
                  <div>
                    <p className="text-xl">Underwater Vehicles</p>
                    <ul
                      className={`absolute left-0 w-full transition-all duration-300 ease-in-out transform bg-black text-white overflow-hidden ${
                        isSubMenu4Open
                          ? "flex flex-col max-h-[600px] opacity-100 border-b border-gray-500 mt-4 pl-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <li className="mb-4">Dive-LD</li>
                    </ul>
                  </div>
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
                <div
                  className={`flex justify-between items-center p-4 border-b border-gray-500 relative ${
                    isSubMenu5Open ? "mb-16" : ""
                  }`}
                >
                  <div>
                    <p className="text-xl">We're Hiring</p>
                    <ul
                      className={`absolute left-0 w-full transition-all duration-300 ease-in-out transform bg-black text-white overflow-hidden ${
                        isSubMenu5Open
                          ? "flex flex-col max-h-[600px] opacity-100 border-b border-gray-500 mt-4 pl-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <li className="mb-4">Careers</li>
                      <li className="mb-4">Open Positions</li>
                    </ul>
                  </div>
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
                  <li className="p-4 border-b border-gray-500">
                    <p className="text-xl">Mission</p>
                  </li>
                </div>
                {/* End of div 6 for Mission */}
                {/* Start of div 7 for Newsroom */}
                <div className="z-10 flex justify-between">
                  <li className="p-4 border-b border-gray-500">
                    <p className="text-xl">Newsroom</p>
                  </li>
                </div>
                {/* End of div 7 for newsroom */}
                {/* End of div 8 for media */}
                <div className="z-10 flex justify-between">
                  <li className="p-4 border-b border-gray-500">
                    <p className="text-xl">Media</p>
                  </li>
                </div>
              </ul>
            </div>
            {/* THE END OF THE SUB MENU DROP DOWNS ON MOBILE */}
          </div>
        </div>
      </div>
      {/* Below is the start of the navbar menu for desktop and larger thn tablet screens */}
      <div className="hidden lg:block">
        {/* We need this <div> above for the responsiveness */}
        {/* This will show on laptops and desktops */}
        <ul
          className={`z-10 relative flex justify-between border-b-2 border-r-2 border-l-2 text-white ${
            isOpen || isOpen2 || isOpen3 || isOpen4
              ? "bg-black"
              : "bg-transparent"
          }`}
        >
          {/* The <ul> above is the parent for the <li>Logo</li> and other <li>Links</li> */}
          <li className="text-lg font-bold uppercase border-r-2 self-center p-10 py-10 transition-all duration-500 ease-in transform hover:bg-gray-400 cursor-pointer">
            <Link to="/">Anduril</Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => {
              // Clear the timeout if it is active...
              if (timeoutId) clearTimeout(timeoutId);
              setIsOpen(true);
            }}
            onMouseLeave={() => {
              const id = setTimeout(() => setIsOpen(false), 600);
              setTimeoutId(id);
            }}
          >
            <p className="flex justify-center">
              <Link to="/hive" className="inline-block py-10">
                Lattice Solutions
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 z-10 relative transform transition-transform duration-500"
                style={{
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
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
            </p>
            {isOpen && (
              <ul
                className="fixed bg-black mt-2"
                style={{ width: "100vw", left: 0 }}
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
          <li
            className="relative group"
            onMouseEnter={() => {
              // Clear the timeout if it is active...
              if (timeoutId2) clearTimeout(timeoutId2);
              setIsOpen2(true);
            }}
            onMouseLeave={() => {
              const id = setTimeout(() => setIsOpen2(false), 600);
              setTimeoutId2(id);
            }}
          >
            <p className="flex justify-center">
              <Link to="/hive" className="inline-block py-10">
                Force Protection
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen2(!isOpen2)}
                className="text-white p-2 z-10 relative transform transition-transform duration-500"
                style={{
                  transform: isOpen2 ? "rotate(45deg)" : "rotate(0deg)",
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
            </p>
            {isOpen2 && (
              <ul
                className="fixed bg-black mt-2"
                style={{ width: "100vw", left: 0 }}
              >
                <li className="px-4 py-3">
                  <Link
                    to="/hive/submenu1"
                    className="text-gray-700 hover:text-gray-900 cursor-pointer"
                  >
                    Counter UAS
                  </Link>
                </li>
                <li className="px-4 py-3">
                  <Link
                    to="/hive/submenu2"
                    className="text-gray-700 hover:text-gray-900 cursor-pointer"
                  >
                    Counter Intrusion
                  </Link>
                </li>
                <li className="px-4 py-3">
                  <Link
                    to="/hive/submenu2"
                    className="text-gray-700 hover:text-gray-900 cursor-pointer"
                  >
                    Maritime Counter Intrusion
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative group"
            onMouseEnter={() => {
              // Clear the timeout if it is active...
              if (timeoutId3) clearTimeout(timeoutId3);
              setIsOpen3(true);
            }}
            onMouseLeave={() => {
              const id = setTimeout(() => setIsOpen3(false), 600);
              setTimeoutId3(id);
            }}
          >
            <p className="flex justify-center">
              <Link to="/hive" className="inline-block py-10">
                Air Systems
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen3(!isOpen3)}
                className="text-white p-2 z-10 relative transform transition-transform duration-500"
                style={{
                  transform: isOpen3 ? "rotate(45deg)" : "rotate(0deg)",
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
            </p>
            {isOpen3 && (
              <ul
                className="fixed bg-black mt-2"
                style={{ width: "100vw", left: 0 }}
              >
                <li className="px-4 py-3">
                  <Link
                    to="/hive/submenu1"
                    className="text-gray-700 hover:text-gray-900 cursor-pointer"
                  >
                    Ghost
                  </Link>
                </li>
                <li className="px-4 py-3">
                  <Link
                    to="/hive/submenu2"
                    className="text-gray-700 hover:text-gray-900 cursor-pointer"
                  >
                    ALTIUS
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative group"
            onMouseEnter={() => {
              // Clear the timeout if it is active...
              if (timeoutId4) clearTimeout(timeoutId4);
              setIsOpen4(true);
            }}
            onMouseLeave={() => {
              const id = setTimeout(() => setIsOpen4(false), 600);
              setTimeoutId4(id);
            }}
          >
            <p className="flex justify-center">
              <Link to="/hive" className="inline-block py-10">
                Underwater Vehicles
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen4(!isOpen4)}
                className="text-white p-2 z-10 relative transform transition-transform duration-500"
                style={{
                  transform: isOpen4 ? "rotate(45deg)" : "rotate(0deg)",
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
            </p>
            {isOpen4 && (
              <ul
                className="fixed bg-black mt-2"
                style={{ width: "100vw", left: 0 }}
              >
                <li className="px-4 py-3">
                  <Link
                    to="/hive/submenu1"
                    className="text-gray-700 hover:text-gray-900 cursor-pointer"
                  >
                    Dive-LD
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link
              to="/hiring"
              className="inline-block p-10 py-10 border-l-2 self-center transition-all duration-500 ease-in transform hover:underline hover:bg-black"
            >
              We're Hiring
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
