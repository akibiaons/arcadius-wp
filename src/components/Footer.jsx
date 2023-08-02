import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6">
      <div className="container mx-auto">
        <p className="text-xl font-semibold pb-8">Arcadius INC</p>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul>
              <li>
                <a href="#" className="text-white">
                  Lattice
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Ghost
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  ALTIUS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul>
              <li>
                <a href="#" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul>
              <li>
                <a href="#" className="text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Press Kit
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 border-t border-gray-700 pt-8">
          <div>
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
