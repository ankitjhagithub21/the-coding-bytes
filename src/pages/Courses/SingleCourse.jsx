import React, { useState } from 'react';
import list from './java-course-list';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';

const SingleCourse = () => {
  const [active, setActive] = useState(false);

  return (
    <article>
      <div
        className={` ${active ? 'left-0' : '-left-full'} fixed bg-gray-100 text-black z-20 top-20 lg:w-1/4 w-1/2 flex flex-col lg:p-5 p-3 gap-3 border-r-2 min-w-fit min-h-screen `}
      >
        {list.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`} className='border-b-2 flex items-center gap-2'>
            <FaArrowAltCircleRight /> {course.name}
          </Link>
        ))}
      </div>
      <div className={`min-h-screen container px-3 mx-auto py-24`}>
        <button className='text-3xl fixed left-0 z-40 top-12 lg:hidden' id='toggleBtn' onClick={() => setActive(!active)}><IoMenu /></button>
        <h1 className="text-3xl font-bold">What Is Java</h1>
        <div className="text-lg mt-5">
          <p>
            Java is a high-level, versatile, and object-oriented programming language that was developed by Sun Microsystems (acquired by Oracle Corporation in 2010). It was first released in 1995, and since then, it has become one of the most widely used programming languages in the world. Here are some key aspects of Java:
          </p>
          <ul>
            <li className="mt-2"><b>Platform Independence:</b> Java follows the principle of "write once, run anywhere" (WORA). This means that Java code can be written on one platform and executed on any other platform with a Java Virtual Machine (JVM). The JVM acts as an interpreter that translates Java bytecode into machine code specific to the underlying hardware.</li>
            <li className="mt-2"><b>Object-Oriented Programming (OOP)</b>: Java is designed around the principles of object-oriented programming, which includes concepts such as encapsulation, inheritance, and polymorphism. This promotes modular and organized code, making it easier to design, maintain, and scale applications.</li>
            <li><b>Security:</b> Java incorporates various security features to create a secure computing environment. The Java Runtime Environment (JRE) uses a sandboxing mechanism to isolate Java applications from the underlying system, preventing potentially harmful code from causing harm.</li>
            <li><b>Multi-threading:</b>Java supports multithreading, allowing developers to write programs that can execute multiple threads concurrently. This feature is crucial for building responsive and efficient applications that can handle concurrent tasks.</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default SingleCourse;
