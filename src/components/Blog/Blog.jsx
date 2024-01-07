import React from 'react';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
  return (
    <article className="py-8 flex flex-wrap md:flex-nowrap">
      <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
        <span className="font-semibold text-xl">
          {blog.name}
        </span>
        <span className="mt-1">{blog.date}</span>
        
      </div>
      <div className="md:flex-grow">
        <h2 className="text-2xl font-medium title-font mb-2">
          {blog.title}
        </h2>
        <p className="leading-relaxed text-md">
          {blog.desc}
        </p>
        <Link className="flex justify-start gap-1 items-center mt-4 text-indigo-500" to={`/blogs/${blog.id}`}>
          <span className='text-lg underline'>Read More</span>
        </Link>
      </div>
    </article>
  );
};

export default Blog;
