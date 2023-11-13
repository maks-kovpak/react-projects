import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/assets/products.json`).then((response) => {
      setProducts(response.data.slice(0, 28));
      setLoading(false);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts, loading, setLoading }}>
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsProvider;
