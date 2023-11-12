import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ProductsContext } from '../providers/ProductsProvider';
import { Button, Badge } from 'flowbite-react';
import GalleryCarousel from '../components/GalleryCarousel';

function ProductDetail() {
  const { id } = useParams();
  const { products } = useContext(ProductsContext);

  const product = products.find((item) => item.id === parseInt(id));

  const navigate = useNavigate();

  return (
    <section className='flex flex-col md:flex-row justify-between items-start gap-8 h-fit md:h-[80vh]'>
      <div className='w-full md:w-1/2 h-[80vw] md:h-full'>
        <GalleryCarousel images={product.images} />
      </div>

      <div className='w-full md:w-1/2 flex flex-col justify-between h-full gap-8'>
        <div className='flex flex-col gap-4 items-start'>
          <h5 className='text-4xl font-semibold tracking-tight text-gray-900 dark:text-white'>{product.title}</h5>
          <p className='text-xl'>{product.description}</p>
          <Badge color='indigo' className='inline-block text-lg'>
            {product.category.name}
          </Badge>
        </div>

        <div className='flex items-center justify-between'>
          <span className='text-3xl font-bold text-gray-900 dark:text-white'>${product.price}</span>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
