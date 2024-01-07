import React from 'react';

const Review = ({ review }) => {
  return (
    <div className="p-4 lg:w-1/3 md:w-1/2 w-full flex flex-col text-center items-center">
      <img
        src={review.img}
        alt="student-image"
        className="rounded-full"
        width={200}
        height={200} 
        loading="lazy"
      />
      <div className="flex-grow">
        <h2 className="text-xl font-bold my-3">{review.name}</h2>
        <p className="leading-relaxed ">{review.desc}</p>
      </div>
    </div>
  );
};

export default React.memo(Review);
