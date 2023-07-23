import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <div>
        <ul className='flex justify-between border-solid py-5 bg-transparent'>
          <li>
            <Link to="/">Arcadius WP</Link>
          </li>
          <li className="relative group"
            onMouseEnter={() => setIsOpen(true)}
          >
            <Link to="/hive" className="inline-block">H.I.V.E Program</Link>
            {isOpen && (
              <ul 
                className="absolute left-0 mt-1 w-48 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50"
                onMouseLeave={() => setIsOpen(false)}  
              >
                <li className="px-4 py-3">
                  <Link to="/hive/submenu1" className="text-gray-700 hover:text-gray-900 cursor-pointer">Command & Control</Link>
                </li>
                <li className="px-4 py-3">
                  <Link to="/hive/submenu2" className="text-gray-700 hover:text-gray-900 cursor-pointer">Mission Autonomy</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/air-security">Air Security</Link>
          </li>
          <li>
            <Link to="/maritime-security">Maritime Security</Link>
          </li>
          <li>
            <Link to="hiring">We're Hiring</Link> 
          </li>           
        </ul>
      </div>
    </div>
  );
}
