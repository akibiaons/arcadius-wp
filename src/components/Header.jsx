import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto">
      <div>
        <ul className='flex justify-between'>
          <li>
            <Link to="/">Arcadius WP</Link>
          </li>
          <li className="relative group"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <Link to="/hive" className="w-full">H.I.V.E Program</Link>
            {isOpen && (
              <div className="pt-2 w-full"> {/* Padding to create bridge and make submenu full width */}
                <ul className="absolute left-0 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50">
                  <li className="px-4 py-3">
                    <Link to="/hive/submenu1" className="text-gray-700 hover:text-gray-900">Submenu 1</Link>
                  </li>
                  <li className="px-4 py-3">
                    <Link to="/hive/submenu2" className="text-gray-700 hover:text-gray-900">Submenu 2</Link>
                  </li>
                </ul>
              </div>
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
