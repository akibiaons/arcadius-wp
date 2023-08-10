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
        <div className="flex flex-col items-center py-20 bg-white text-black"></div>
      </div>
    </>
  );
}
