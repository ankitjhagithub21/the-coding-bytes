import React from 'react';
import { Link } from 'react-router-dom';
import './CodeBox.css';

const CodeBox = ({ data }) => {
  return (
    <div className="md:w-1/2 w-full lg:w-1/4">
      <div className="p-3">
        <div className='rounded-lg p-5 text-gray-100 code-box'>
          <h2 className='text-3xl'>{data.title}</h2>
          <p className='text-lg mt-3'>{data.title} problems with the solutions</p>
          <hr className='my-4' />
          <Link
            className='hover:text-yellow-500 text-lg link'
            to={data.path}
            aria-label={`Click to open ${data.title}`}
          >
            Click to open
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CodeBox;
