import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container mx-auto"> 
        <div className="bg-white">
          {/* The <ul> below containing all the links and submenus of the navbar */}
          <ul className='flex justify-between'>
            <li className='border-solid border-white cursor-pointer hover:fill-gray-200'>
              <Link to="/">Arcadius WP</Link>
            </li>
            <li 
              className='cursor-pointer relative group'
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <Link to="/hive">H.I.V.E Program</Link>
              {isOpen && (
                <ul className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
                  <li className="px-4 py-3">
                    <Link to="" className="text-gray-700 hover:text-gray-900">Command & Control</Link>
                    {/* Could add <Link> to link to specific product page */}
                  </li>
                  <li className="px-4 py-3">
                    <Link to="" className="text-gray-700 hover:text-gray-900">Mission Autonomy</Link>
                    {/* Could add <Link to link to specific product page */}
                  </li>
                </ul>
              )}
            </li>
            <li className='cursor-pointer'>
              <Link to="/air-security">Air Security</Link>
            </li>
            <li className='cursor-pointer'>
              <Link to="/maritime-security">Maritime Security</Link>
            </li>
            <li className='cursor-pointer'>
              <Link to="hiring">We're Hiring</Link> 
            </li>           
          </ul>

        </div>
      </div>
    </>
  )
}
