import React, { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Page Not Found - The Coding Bytes';
  }, []);

  return (
    <div className='container py-24 mx-auto text-center flex flex-col justify-center items-center'>
      <img src="/images/notFound.png" alt="not-found" className='lg:w-1/2 w-full' />
      <h2 className='text-3xl font-bold'>Oops, looks like the page is lost.</h2>
      <p className='text-lg'>
        This is not a fault, just an accident that was not intentional.
      </p>
    </div>
  );
};

export default NotFound;
