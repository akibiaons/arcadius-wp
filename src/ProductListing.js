import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductListing () {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:1337/api/product-models?populate=*');
          setProducts(response.data.data);
        } catch (error) {
            console.error('Error fetching product data', error);
        } 
      };

      fetchProducts();
    },[]);

    return (
      <>
        {products?.map((product) => (
          <div className='h-screen' key={product.id}>
            <h2>{product.attributes.title}</h2>
            <p>{product.attributes.description}</p>
            <p>Price: ${product.attributes.price}</p>
            <img src={`http://localhost:1337${product.attributes.image.data[0].attributes.url}`} alt='warfare' className='h-[50%]'/>
          </div>
        ))};
      </>
    );
};

export default ProductListing;