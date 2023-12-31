import React, { useState, useEffect } from "react";
import axios from "axios";
import CounterIntrusionImg from "../components/CounterIntrusionImg";
import CartButtons from "../components/CartButtons";

export default function CounterIntrusion() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/product-models/6?populate=*"
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
          src="https://cdn.sanity.io/files/z5s3oquj/production/c4d216608edb20d1a786ac9f97b3cb56f4e6686f.mp4"
          autoPlay
          loop
          muted
          style={{ objectFit: "cover" }}
          className="w-full h-full object-cover z-50"
          allow="autoplay"
          alt="arcadius systems INC"
        ></video>
      </div>
      {/* Below is the mobile version */}
      <div className="lg:hidden block">
        {product ? (
          <div className="flex flex-col items-center py-16 bg-white text-black">
            <div className="container text-left mb-4 max-w-lg mx-auto px-4">
              <h1 className="text-center pb-10 font-semibold text-xl">
                {product.attributes.title}
              </h1>
              <p className="text-md font-light pb-10">
                {product.attributes.description}
              </p>
              <p className=""></p>
            </div>
            <div className="px-4">
              <CounterIntrusionImg />
            </div>
            <div className="container text-left mb-4 max-w-lg mx-auto px-4">
              <p className="text-black mt-8 text-lg">
                Price: ${product.attributes.price}
              </p>
              <div className="mt-10 text-center hover:cursor-pointer text-black">
                <button className="relative font-thin text-xl">
                  <CartButtons id={product.id} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      {/*========================================================================================================================================================== */}
      {/* Below is the desktop version */}
      <div className="hidden lg:block bg-black text-white">
        <div className="border-b border-black pb-10">
          {product ? (
            <div className="max-w-[100%] mx-auto bg-black py-20">
              <div className="grid grid-cols-8">
                <div className="col-start-1 col-end-5 pr-8 pl-8">
                  <CounterIntrusionImg />
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
                    <CartButtons id={product.id} />
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
