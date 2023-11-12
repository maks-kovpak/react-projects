import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryCard from '../components/CategoryCard';

function Categories() {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/categories').then((response) => {
      setCategories(response.data.slice(0, 5));
      setLoading(false);
    });
  }, []);

  return loading ? (
    <div className='flex justify-center items-center h-full w-full'>
      <h1 className='text-3xl'>Loading...</h1>
    </div>
  ) : (
    <>
      <h1 className='text-4xl font-bold mb-6 text-center'>Categories</h1>
      <div className='cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {categories.map((item) => (
          <CategoryCard category={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Categories;
