import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  const mobileMenu = isMobileMenuOpen ? (
    <div className="absolute top-0 right-0 h-screen w-64 bg-gray-100 p-8 lg:hidden">
      <button onClick={toggleMobileMenu} className="mb-8">Close Menu</button>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hive">H.I.V.E Program</Link></li>
        <li><Link to="/air-security">Air Security</Link></li>
        <li><Link to="/maritime-security">Maritime Security</Link></li>
        <li><Link to="hiring">We're Hiring</Link></li>
      </ul>
    </div>
  ) : null;

  return (
    <div className="container mx-auto">
      <div className="text-white">
        <button onClick={toggleMobileMenu} className="md:hidden">Menu</button>
        {mobileMenu}
        <ul className='relative z-10 flex justify-between bg-transparent border-b-2 border-r-2 border-l-2'>
          <li className="text-lg border-r-2 pr-10 py-10">
            <Link to="/">Anduril</Link>
          </li>
          <li className="relative group"
            onMouseEnter={() => setIsOpen(true)}
          >
            <Link to="/hive" className="inline-block py-10">H.I.V.E Program</Link>
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
            <Link to="/air-security" className="inline-block py-10">Air Security</Link>
          </li>
          <li>
            <Link to="/maritime-security" className="inline-block py-10">Maritime Security</Link>
          </li>
          <li>
            <Link to="hiring" className="inline-block py-10 border-l-2">We're Hiring</Link> 
          </li>           
        </ul>
      </div>
    </div>
  );
}
