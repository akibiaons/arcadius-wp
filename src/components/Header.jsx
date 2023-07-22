import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function Header() {

  return (
    <>
      <div className="container mx-auto"> {/*Parent container*/}
        <div> {/* Parent container of the ul and li */}
          <ul className='flex justify-between'>
            <li className=''>
              <Link to="/">Arcadius WP</Link>
            </li>
            <li className='' >
              <Link to="/hive">H.I.V.E Program</Link>
            </li>
            <li className=''>
              <Link to="/air-security">Air Security</Link>
            </li>
            <li className=''>
              <Link to="/maritime-security">Maritime Security</Link>
            </li>
            <li className=''>
              <Link to="hiring">We're Hiring</Link> 
            </li>           
          </ul>
        </div>
      </div>
    </>
  )
}
