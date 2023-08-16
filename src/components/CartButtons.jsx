// This file will contain + and - buttons for adding and removing products from the cart
import React from "react";

export default function CartButtons() {
  const quantity = 2;
  return (
    <>
      <div className="flex items-center lg:text-white">
        <div className="flex-1">
          {quantity === 0 ? (
            <div className="bg-gray-300 border border-black rounded-lg transition transform duration-200 hover:translate-y-2 cursor-pointer">
              + Add to Cart
            </div>
          ) : (
            <div>
              <div className="lg:flex items-center space-x-5 lg:space-x-10">
                <div className="flex items-center space-x-5 lg:space-x-10">
                  <button className="bg-blue-200 rounded-md text-4xl px-4 text-black transition transform duration-200 hover:translate-y-2">
                    -
                  </button>
                  <div className="ml-10 mr-10 text-2xl">
                    <span>{quantity}</span> in cart
                  </div>
                  <button className="bg-blue-200 rounded-md text-4xl px-4 text-black transition transform duration-200 hover:translate-y-2">
                    +
                  </button>
                </div>
                <button className="bg-red-600 rounded-md text-xl p-2 px-4 mt-8 lg:mt-0 text-black transition transform duration-200 hover:translate-y-2">
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
