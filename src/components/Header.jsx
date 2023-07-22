import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="container mx-auto"> 
        <div className="bg-white">
          <ul className='flex justify-between'>
            <li className='border-solid border-white cursor-pointer hover:fill-gray-200'>
              <Link to="/">Arcadius WP</Link>
            </li>
            <li className='cursor-pointer'>
              <Link to="/hive">H.I.V.E Program</Link>
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
