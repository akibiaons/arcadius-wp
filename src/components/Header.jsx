import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ShoppingCart } from "./ShoppingCart";

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

  // Below is state for cart
  const { openCart, cartQuantity } = useShoppingCart();

  // Below is state for modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="z-50">
      <div className="block lg:hidden">
        {/* This will show on mobile and tablets */}
        <div
          className={`flex justify-between items-center relative z-10 p-4 ${
            isOpen
              ? "bg-black ease-in-out transition"
              : "bg-black ease-in-out transition"
          }`}
        >
          <p className="text-white">
            <Link to="/" className="text-xl font-semibold">
              Arcadius INC
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
                    <p className="text-lg">Riptide Solutions</p>
                    <ul
                      className={`absolute left-0 w-full transition-all duration-300 ease-in-out transform bg-black text-white overflow-hidden ${
                        isSubMenuOpen
                          ? "flex flex-col max-h-[600px] opacity-100 border-b border-gray-500 mt-4 pl-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <li className="mb-4 text-sm">
                        <Link to="/commandandcontrol">Command & Control</Link>
                      </li>
                      <li className="mb-4 text-sm">
                        <Link to="/missionautonomy">Mission Autonomy</Link>
                      </li>
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
                    <p className="text-lg">Force Protection</p>
                    <ul
                      className={`absolute left-0 w-full transition-all duration-300 ease-in-out transform bg-black text-white overflow-hidden ${
                        isSubMenu2Open
                          ? "flex flex-col max-h-[600px] opacity-100 border-b border-gray-500 mt-4 pl-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <li className="mb-4 text-sm">
                        <Link to="/counteruas">Counter UAS</Link>
                      </li>
                      <li className="mb-4 text-sm">
                        <Link to="/counterintrusion">Counter Intrusion</Link>
                      </li>
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
                    <p className="text-lg">Air Systems</p>
                    <ul
                      className={`absolute left-0 w-full transition-all duration-300 ease-in-out transform bg-black text-white overflow-hidden ${
                        isSubMenu3Open
                          ? "flex flex-col max-h-[600px] opacity-100 border-b border-gray-500 mt-4 pl-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <li className="mb-4 text-sm">
                        <Link to="/ghost">Ghost</Link>
                      </li>
                      <li className="mb-4 text-sm">
                        <Link to="/altius">ALTIUS</Link>
                      </li>
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
                    <p className="text-lg">Underwater Vehicles</p>
                    <ul
                      className={`absolute left-0 w-full transition-all duration-300 ease-in-out transform bg-black text-white overflow-hidden ${
                        isSubMenu4Open
                          ? "flex flex-col max-h-[600px] opacity-100 border-b border-gray-500 mt-4 pl-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <li className="mb-4 text-sm">
                        <Link to="/diveld">Dive-LD</Link>
                      </li>
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
                  <div className="grid grid-cols-4">
                    <div
                      className="flex items-center justify-center bg-slate-500 hover:bg-blue-500 rounded-full"
                      style={{
                        width: "2rem",
                        height: "2rem",
                        transform: "translate(25%, 25%)",
                      }}
                    >
                      <button onClick={() => setIsModalOpen(true)}>
                        <FontAwesomeIcon
                          onClick={openCart}
                          icon={faCartShopping}
                          style={{
                            color: "white",
                            width: "1.4rem",
                            height: "1.18rem",
                          }}
                          className="hover:cursor-pointer rounded-full"
                        />
                      </button>

                      <span
                        className="absolute -bottom-2 -right-2 flex items-center justify-center text-white text-xs font-bold bg-red-500 rounded-full"
                        style={{
                          width: "1rem",
                          height: "1rem",
                        }}
                      >
                        {cartQuantity}
                      </span>
                    </div>
                    <span
                      className="hover:cursor-pointer mt-3 underline underline-offset-4"
                      onClick={() => setIsModalOpen(true)}
                    >
                      View Cart
                    </span>
                  </div>
                </div>
                {/* End of div 5 for we're hiring */}
                {/* Start of div 6 for Mission sections */}
                <div className="z-10 flex justify-between">
                  <li className="p-4 border-b border-gray-500">
                    <p className="text-lg">Mission</p>
                  </li>
                </div>
                {/* End of div 6 for Mission */}
                {/* Start of div 7 for Newsroom */}
                <div className="z-10 flex justify-between">
                  <li className="p-4 border-b border-gray-500">
                    <p className="text-lg">Newsroom</p>
                  </li>
                </div>
                {/* End of div 7 for newsroom */}
                {/* End of div 8 for media */}
                <div className="z-10 flex justify-between">
                  <li className="p-4 border-b border-gray-500">
                    <p className="text-lg">Media</p>
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
          className={`z-10 relative flex justify-between border-b-2 border-r-2 border-l-2 text-lg font-semibold text-white ${
            isOpen || isOpen2 || isOpen3 || isOpen4 ? "bg-black" : "bg-black"
          }`}
        >
          {/* The <ul> above is the parent for the <li>Logo</li> and other <li>Links</li> */}
          <li className="text-xl font-bold uppercase border-r-2 self-center p-10 py-10 transition-all duration-500 ease-in transform hover:bg-gray-400 cursor-pointer">
            <Link to="/">Arcadius INC</Link>
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
              <Link
                onClick={() => setIsOpen(!isOpen)}
                className="inline-block py-10 hover:underline transition-underline duration-900"
                style={{
                  textDecoration: isOpen ? "underline" : "none",
                }}
              >
                Riptide Solutions
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
                className="fixed grid grid-cols-2 bg-black mt-2" /* I added grid and two cols with an empty div to create that description space for laptop and desktop versions */
                style={{ width: "100vw", left: 0 }}
              >
                <div className="border-r-2 flex flex-col items-start pl-10">
                  <li className="px-4 py-10">
                    <Link
                      to="/commandandcontrol"
                      className="text-white text-xl hover:underline cursor-pointer"
                    >
                      Command & Control
                    </Link>
                  </li>
                  <li className="px-4 py-8 mb-4">
                    <Link
                      to="/missionautonomy"
                      className="text-white text-xl hover:underline cursor-pointer"
                    >
                      Mission Autonomy
                    </Link>
                  </li>
                </div>
                <div className="empty-box w-full"></div>
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
              const id = setTimeout(() => setIsOpen2(false), 500);
              setTimeoutId2(id);
            }}
          >
            <p className="flex justify-center">
              <Link
                onClick={() => setIsOpen2(!isOpen2)}
                className="inline-block py-10"
                style={{
                  textDecoration: isOpen2 ? "underline" : "none",
                }}
              >
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
                className="fixed grid grid-cols-2 bg-black mt-2" /* I added grid and two cols with an empty div to create that description space for laptop and desktop versions */
                style={{ width: "100vw", left: 0 }}
              >
                <div className="border-r-2 flex flex-col items-start ml-10">
                  <li className="px-4 py-10">
                    <Link
                      to="/counteruas"
                      className="text-white text-xl hover:underline cursor-pointer"
                    >
                      Counter UAS
                    </Link>
                  </li>
                  <li className="px-4 py-8 mb-4">
                    <Link
                      to="/counterintrusion"
                      className="text-white text-xl hover:underline cursor-pointer"
                    >
                      Counter Intrusion
                    </Link>
                  </li>
                </div>
                <div className="empty-box w-full"></div>
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
              <Link
                onClick={() => setIsOpen3(!isOpen3)}
                className="inline-block py-10"
                style={{
                  textDecoration: isOpen3 ? "underline" : "none",
                }}
              >
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
                className="fixed grid grid-cols-2 bg-black mt-2" /* I added grid and two cols with an empty div to create that description space for laptop and desktop versions */
                style={{ width: "100vw", left: 0 }}
              >
                <div className="border-r-2 flex flex-col items-start pl-10">
                  <li className="px-4 py-10">
                    <Link
                      to="/ghost"
                      className="text-white text-xl hover:underline cursor-pointer"
                    >
                      Ghost
                    </Link>
                  </li>
                  <li className="px-4 py-8 mb-4">
                    <Link
                      to="/altius"
                      className="text-white text-xl hover:underline cursor-pointer"
                    >
                      ALTIUS
                    </Link>
                  </li>
                </div>
                <div className="empty-box w-full"></div>
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
              const id = setTimeout(() => setIsOpen4(false), 700);
              setTimeoutId4(id);
            }}
          >
            <p className="flex justify-center">
              <Link
                onClick={() => setIsOpen4(!isOpen4)}
                className="inline-block py-10"
                style={{
                  textDecoration: isOpen4 ? "underline" : "none",
                }}
              >
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
                className="fixed grid grid-cols-2 bg-black mt-2" /* I added grid and two cols with an empty div to create that description space for laptop and desktop versions */
                style={{ width: "100vw", left: 0 }}
              >
                <div className="border-r-2 flex flex-col items-start pl-10">
                  <li className="px-4 py-10">
                    <Link
                      to="/diveld"
                      className="text-white text-xl hover:underline cursor-pointer"
                    >
                      Dive-LD
                    </Link>
                  </li>
                </div>
                <div className="empty-box w-full"></div>
              </ul>
            )}
          </li>
          <li className="p-12 py-8">
            <div
              className="flex items-center justify-center bg-slate-500 hover:bg-blue-500 rounded-full"
              style={{
                width: "2.5rem",
                height: "2.2rem",
                transform: "translate(25%, 25%)",
              }}
            >
              <button onClick={() => setIsModalOpen(true)}>
                <FontAwesomeIcon
                  onClick={openCart}
                  icon={faCartShopping}
                  style={{
                    color: "white",
                    width: "1.6rem",
                    height: "1.3rem",
                  }}
                  className="hover:cursor-pointer rounded-full"
                />
                <span
                  className="absolute -bottom-2 -right-2 flex items-center justify-center text-white text-xs font-bold bg-red-500 rounded-full"
                  style={{
                    width: "1rem",
                    height: "1rem",
                  }}
                >
                  {cartQuantity}
                </span>
              </button>
            </div>
          </li>
        </ul>
      </div>
      {/* Below is the isModalOpen true component to get rendered */}
      {isModalOpen && <ShoppingCart onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
