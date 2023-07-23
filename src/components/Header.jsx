import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function Header() {

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
      <div className="container mx-auto">
        <div>
          <p className="cursor-pointer">Anduril</p>
          <ul className="cursor-pointer">   
            <li>
              <Link>H.I.V.E Program</Link>
            </li>
            <li>
              <Link>Air Security</Link>
            </li>
            <li>
              <Link>Maritime Security</Link>
            </li>
            <li>
              <Link>We're Hiring</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
