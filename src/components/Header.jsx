import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {

  return (
    <>
      <div className="container mx-auto"> {/*Parent container*/}
        <div> {/* Parent container of the ul and li */}
          <ul className='flex justify-between'>
            <li className='cursor-pointer'>
              <Link>Arcadius WP</Link>
            </li>
            <li className='cursor-pointer' >
              H.I.V.E Program
            </li>
            <li className='cursor-pointer'>
              Air Security
            </li>
            <li className='cursor-pointer'>
              Maritime Security
            </li>
            <li className='cursor-pointer'>
              We're Hiring
            </li>           
          </ul>
        </div>
      </div>
    </>
  )
}
