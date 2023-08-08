import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CounterUas() {
  const [products, setProducts] = useState([]);
  const specificProductId = 5; // Change this to the ID of the product you want to display
  const [specificProduct, setSpecificProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/product-models?populate=*"
        );
        setProducts(response.data.data);

        {
          /* Below is the new shit that was added that I need to figure out the concept of...*/
        }

        const foundProduct = products.find(
          (product) => product.id === specificProductId
        );
        setSpecificProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="lg:hidden block bg-black text-white">
        <div className="flex flex-col items-center bg-black text-white">
          <div className="container text-left mt-4 max-w-lg mx-auto px-4"></div>
        </div>
      </div>
    </>
    /* Below is the layout for a single product import
    <div className="h-screen">
      {specificProduct && (
        <div key={specificProduct.id}>
          <img
            src={`http://localhost:1337${specificProduct.attributes.image.data[0].attributes.url}`}
            alt="warfare"
            className="h-[50%]"
          />
        </div>
      )}
    </div>
    */
  );
}
