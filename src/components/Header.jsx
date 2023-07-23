import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
      <div className="mx-auto"> {/* Not putting at mx-auto makes the index.js background pop off */}
        <div>
          <ul className="cursor-pointer grid grid-cols-5 bg-transparent text-black">   
            <p className="cursor-pointer"><Link to="/">Anduril</Link></p>
            <li>
              <Link to="/hive">H.I.V.E Program</Link>
            </li>
            <li>
              <Link to="air-security">Air Security</Link>
            </li>
            <li>
              <Link to="maritime-security">Maritime Security</Link>
            </li>
            <li>
              <Link to="were-hiring">We're Hiring</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
