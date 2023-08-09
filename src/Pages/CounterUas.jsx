import React, { useState, useEffect } from "react";
import axios from "axios";

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
              <div className="border mt-10 p-5 text-center rounded-lg hover:cursor-pointer">
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
