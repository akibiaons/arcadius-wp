import React, { useState, useEffect } from "react";
import axios from "axios";

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
              <p className="text-sm font-light pb-10">
                {product.attributes.description}
              </p>
              <p className=""></p>
            </div>
            <div className="container text-left mb-4 mt-8 max-w-lg mx-auto px-4">
              {/* Here I will add a slide/carousel to showcase the item (it will be a component) */}
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
