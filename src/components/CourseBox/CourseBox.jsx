import React from 'react';
import { Link } from 'react-router-dom';

const CourseBox = ({ data }) => {
  const boxStyle = {
    backgroundImage: `url(${data.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <article className="p-4 lg:w-1/3 md:w-1/2 w-full h-64">
      <Link to={`/courses/${data.path}`}>
        <div
          style={boxStyle}
          className="h-full shadow-lg cursor-pointer rounded-lg overflow-hidden relative border-2"
        />
      </Link>
    </article>
  );
};

export default CourseBox;
