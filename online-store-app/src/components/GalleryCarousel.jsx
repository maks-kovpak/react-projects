import { Carousel } from 'flowbite-react';

function GalleryCarousel({ images, ...props }) {
  return (
    <div className='h-full' {...props}>
      <Carousel slide={false}>
        {images.map((path, index) => (
          <img key={index} src={path} alt='' className='w-full h-full object-cover' />
        ))}
      </Carousel>
    </div>
  );
}

export default GalleryCarousel;
