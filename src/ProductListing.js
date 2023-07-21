import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductListing () {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:1337/api/product-models');
          setProducts(response.data.data);
        } catch (error) {
            console.error('Error fetching product data', error);
        } 
      };

      fetchProducts();
    },[]);

    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} />
          </div>
        ))};
      </div>
    );
};

export default ProductListing;