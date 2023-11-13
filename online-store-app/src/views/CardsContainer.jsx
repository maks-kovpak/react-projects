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
    if (categoryID) {
      axios.get(`${process.env.PUBLIC_URL}/assets/categories.json`).then((response) => {
        const category = response.data.find((item) => item.id === parseInt(categoryID));
        setCategoryName(category.name);
      });
    }
  }, [categoryID]);

  return loading ? (
    <div className='flex justify-center items-center h-full w-full'>
      <h1 className='text-3xl'>Loading...</h1>
    </div>
  ) : (
    <>
      <h1 className='text-4xl font-bold mb-6 text-center'>{categoryName}</h1>

      {categoryProducts.length ? (
        <div className='cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {categoryProducts.map((item) => (
            <ProductCard product={item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className='h-[60vh] w-full flex justify-center items-center'>
          <h1 className='text-5xl font-medium text-center'>Nothing was found...</h1>
        </div>
      )}
    </>
  );
}

export default CardsContainer;
