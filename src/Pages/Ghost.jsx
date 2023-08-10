import React, { useState, useEffect } from "react";
import axios from "axios";
import GhostCarousel from "../components/GhostCarousel";

export default function Ghost() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/product-models/4?populate=*"
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
      <div className="w-full h-screen bg-black">
        <video
          src="https://cdn.sanity.io/files/z5s3oquj/production/2b3482ca376f7a16a9d5a9297b9339e2eb46cdc3.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
          className="w-full h-full object-cover z-50"
          allow="autoplay"
          alt="arcadius systems ghost UAV"
        ></video>
      </div>
      {/*========================================================================================================================================================== */}
      {/* Below is the mobile version */}
      <div className="lg:hidden block bg-white text-black">
        <div className="border-b border-white pb-10">
          {product ? (
            <div className="flex flex-col items-center">
              <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
                <GhostCarousel />
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
                    <div className="">
                      <div className="bg-gray-300 border border-black rounded-lg py-3 px-10 transition transform duration-200 hover:translate-y-2">
                        Add to Cart
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      {/*========================================================================================================================================================== */}
      {/* Below is the mobile version */}
      <div className="hidden lg:block bg-black text-white">
        <div className="border-b border-black pb-10">
          {product ? (
            <div className="max-w-[100%] mx-auto bg-black py-20">
              <div className="grid grid-cols-8">
                <div className="col-start-1 col-end-5 pr-8 pl-8">
                  <GhostCarousel />
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
                  <div className="mt-10 text-center hover:cursor-pointer text-black">
                    <button className="relative font-thin text-xl hover:cursor-pointer">
                      <div className="">
                        <div className="bg-gray-300 border border-black rounded-lg py-3 px-10 transition transform duration-200 hover:translate-y-2">
                          Add to Cart
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                {/* Below will be the button to buy now and add to cart...*/}
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </>
  );
}
