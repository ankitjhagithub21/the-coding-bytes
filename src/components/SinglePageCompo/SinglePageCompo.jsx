import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const SinglePageCompo = ({ data }) => {
  const { isDarkMode } = useTheme();

  return (
    <section className='my-4'>
      {data.content.map((b, index) => (
        <article key={index}>
          <h2 className={`border-b-2 ${isDarkMode ? 'text-orange-500' : 'text-indigo-500'} text-2xl font-bold pb-2`}>{b.title}</h2>
          <ul className='p-5 text-lg list-disc'>
            {b.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default SinglePageCompo;
