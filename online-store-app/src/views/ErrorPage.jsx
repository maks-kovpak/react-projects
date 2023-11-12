import { NavLink } from 'react-router-dom';
import { Button } from 'flowbite-react';

function ErrorPage() {
  return (
    <section className='bg-gray-100 h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded-lg shadow-md max-w-lg w-full'>
        <h1 className='text-3xl font-semibold text-gray-800 mb-6'>Oops! Something went wrong</h1>

        <p className='text-gray-600 mb-4'>
          We apologize for the inconvenience. It seems there is an issue with our application.
        </p>

        <Button as={NavLink} to='/'>
          Go back to the home page
        </Button>
      </div>
    </section>
  );
}

export default ErrorPage;
