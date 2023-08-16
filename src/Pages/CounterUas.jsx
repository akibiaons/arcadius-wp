import React, { useState, useEffect } from "react";
import axios from "axios";
import CartButtons from "../components/CartButtons";

export default function CounterUas() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/product-models/5?populate=*"
        );
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <>
      <div>
        <div className="w-full h-screen bg-black">
          <video
            src="https://cdn.sanity.io/files/z5s3oquj/production/d12c7f229c69b2dd1c36920470b2cc3b916ea19e.mp4"
            autoPlay
            loop
            muted
            style={{ objectFit: "cover" }}
            className="w-full h-full object-cover z-50"
            allow="autoplay"
            alt="arcadius systems INC"
          ></video>
        </div>
      </div>
      {/* Below is the mobile version */}
      <div className="lg:hidden block bg-black text-white">
        <div className="border-b border-white pb-10">
          {product ? (
            <div className="flex flex-col items-center">
              <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
                <img
                  className="pt-20"
                  src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`}
                  alt={product.attributes.title}
                />
                <div className="pt-10">
                  <h1 className="text-center pb-10 font-semibold text-xl">
                    {product.attributes.title}
                  </h1>
                  <p className="text-sm font-light pb-10">
                    {product.attributes.description}
                  </p>
                  <p>Price: ${product.attributes.price}</p>
                </div>
                {/* Below will be the button to buy now and add to cart...*/}
                <div className="mt-10 text-center hover:cursor-pointer text-black">
                  <button className="relative font-thin text-xl">
                    <CartButtons />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {/* Explanation section...*/}
        <div className="flex flex-col items-center bg-black text-white py-4">
          <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
            <p className="font-normal text-lg pb-8">
              Autonomous Aerial Defense
            </p>
            <p className="font-semibold text-2xl pb-8">
              Real-time threat identification meets actionable response.
            </p>
            <p className="text-sm font-light">
              Commercial, off the shelf drones continue to evolve in complexity
              and threaten military and civilian safety & disrupt operations.
              Anduril’s end-to-end cUAS system supports the entire kill chain in
              one, easy to use interface with precision, accuracy and
              reliability. Rogue drones are identified, tracked, and disabled in
              any environment, day or night
            </p>
          </div>
          <div className="pt-8 pb-4">
            <video
              src="https://cdn.sanity.io/files/z5s3oquj/production/beef9bab80ebb7aecb7848d5c10dfafc3c53a82a.mp4"
              style={{ objectFit: "cover" }}
              className="w-full h-full object-cover z-50"
              alt="counter UAS benefits"
              controls
            ></video>
          </div>
        </div>
      </div>
      {/*========================================================================================================================================================== */}
      {/* Below is the desktop section...========================================================================================*/}
      <div className="hidden lg:block bg-black text-white">
        <div className="border-b border-white pb-10">
          {product ? (
            <div className="max-w-[100%] mx-auto bg-black py-20">
              <div className="grid grid-cols-8">
                <div className="col-start-1 col-end-5 pr-8 pl-8">
                  <img
                    src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`}
                    alt={product.attributes.title}
                  />
                </div>
                <div className="col-start-5 col-end-8">
                  <h1 className="text-center pb-10 font-semibold text-xl">
                    {product.attributes.title}
                  </h1>
                  <p className="text-lg font-light pb-10">
                    {product.attributes.description}
                  </p>
                  <p className="text-xl font-semibold">
                    Price: ${product.attributes.price}
                  </p>
                  <div className="mt-10 text-center text-black">
                    <CartButtons />
                  </div>
                </div>
                {/* Below will be the button to buy now and add to cart...*/}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        {/* Explanation section desktop...*/}
        <div className="max-w-[100%] mx-auto bg-black py-20">
          <div className="grid grid-cols-8">
            <div className="col-start-2 col-end-4">
              <p className="font-normal text-2xl pb-8">
                Autonomous Aerial Defense
              </p>
              <p className="font-semibold text-3xl ">
                Real-time threat identification meets actionable response.
              </p>
            </div>
            <div className="col-start-5 col-end-8">
              <p className="text-lg font-light">
                Commercial, off the shelf drones continue to evolve in
                complexity and threaten military and civilian safety & disrupt
                operations. Anduril’s end-to-end cUAS system supports the entire
                kill chain in one, easy to use interface with precision,
                accuracy and reliability. Rogue drones are identified, tracked,
                and disabled in any environment, day or night
              </p>
            </div>
          </div>
          <div className="max-w-[50%] mx-auto bg-black py-40">
            <video
              src="https://cdn.sanity.io/files/z5s3oquj/production/beef9bab80ebb7aecb7848d5c10dfafc3c53a82a.mp4"
              className=""
              alt="counter UAS benefits"
              controls
            ></video>
          </div>
        </div>
      </div>
    </>
  );
}
