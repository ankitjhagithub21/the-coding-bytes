import React from 'react';
import blogs from './data';
import Blog from '../../components/Blog/Blog';


const Blogs = () => {
    console.log(blogs)
  return (
    <section className="overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
    <h1 className="text-4xl font-bold mb-20 text-center">Our Blogs</h1>
      <div className="-my-8 divide-y-2 divide-gray-200">
        
        {
            blogs.map((blog)=>{
                return <Blog key={blog.id} blog={blog}/>
            })
        }
       
      </div>
    </div>
  </section>
  
  );
};

export default Blogs;