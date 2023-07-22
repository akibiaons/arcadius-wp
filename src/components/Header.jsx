import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";



export default function Header() {

  const location = useLocation();
  const navigate = useNavigate();

  function isRouteActive(route) {
    return location.pathname === route;
  }

  return (
    <>
      <div className="container mx-auto"> {/*Parent container*/}
        <div> {/* Parent container of the ul and li */}
          <ul className='flex justify-between'>
            <li className=''>
              <Link onClick={() => navigate("/")}>Arcadius WP</Link>
            </li>
            <li className='' >
              <Link onClick={() => navigate("/hive")}>H.I.V.E Program</Link>
            </li>
            <li className=''>
              <Link onClick={() => navigate("/air-security")}>Air Security</Link>
            </li>
            <li className=''>
              <Link onClick={() => navigate("/maritime-security")}>Maritime Security</Link>
            </li>
            <li className=''>
              <Link onClick={() => navigate("/hiring")}>We're Hiring</Link> 
            </li>           
          </ul>
        </div>
      </div>
    </>
  )
}
