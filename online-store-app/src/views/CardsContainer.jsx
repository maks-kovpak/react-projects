import { useContext, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { ProductsContext } from '../providers/ProductsProvider';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CardsContainer() {
  const { products, loading } = useContext(ProductsContext);
  const { categoryID } = useParams();
  const [categoryProducts, setCategoryProducts] = useState(products);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    if (categoryID) {
      setCategoryProducts(products.filter((item) => item.category.id === parseInt(categoryID)));
    }
  }, [products, categoryID]);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/categories/${categoryID}`)
      .then((response) => setCategoryName(response.data.name));
  }, [categoryID]);

  return loading ? (
    <div className='flex justify-center items-center h-full w-full'>
      <h1 className='text-3xl'>Loading...</h1>
    </div>
  ) : (
    <>
      <h1 className='text-4xl font-bold mb-6 text-center'>{categoryName}</h1>
      <div className='cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {categoryProducts.length ? (
          categoryProducts.map((item) => <ProductCard product={item} key={item.id} />)
        ) : (
          <h1>Nothing was found...</h1>
        )}
      </div>
    </>
  );
}

export default CardsContainer;
