import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogs from './data';
import SinglePageCompo from '../../components/SinglePageCompo/SinglePageCompo';
import blogdetails from "./blogdetails"

const SingleBlog = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [blogDetail,setBlogDetail] = useState(null)

  useEffect(() => {
    const currBlogIndex = blogs.findIndex((blog) => blog.id == id);
    const currBlogDetailIndex = blogdetails.findIndex((blogDetail) => blogDetail.id == id);

    if (currBlogIndex !== -1) {

      setBlog(blogs[currBlogIndex]);
      setBlogDetail(blogdetails[currBlogDetailIndex]);
      
    }
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <section>
     
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-3/4 mx-auto w-full">
          <img
            alt={`Image for ${blog.title}`}
            className="object-cover object-center h-64 w-full rounded-lg"
            src={blog.img}
          />
          <h1 className='text-2xl font-bold my-4'>{blog.title}</h1>
          <p className='text-lg mb-4'>{blog.desc}</p>
          <SinglePageCompo data={blogDetail} />
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
