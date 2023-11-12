import { Card } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

function CategoryCard({ category }) {
  return (
    <Card className='w-full' imgAlt={category.name} imgSrc={category.image}>
      <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{category.name}</h5>

      <div className='flex items-center justify-between'>
        <NavLink
          to={`/products/${category.id}`}
          className='rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800'
        >
          Go to category
        </NavLink>
      </div>
    </Card>
  );
}

export default CategoryCard;
