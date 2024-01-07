import React from 'react';

const RecentJob = ({ data }) => {
  const { title, details } = data;

  return (
    <article className="w-full my-4">
      <div className="p-4 border rounded-lg cursor-pointer">
        <h2 className="font-bold text-lg" tabIndex="0">
          {title}
        </h2>
        <div className="flex flex-wrap gap-2 mt-2" aria-label={`Details for ${title}`}>
          {details.map((box, index) => (
            <div key={index} className="border px-2 rounded-lg" tabIndex="0">
              {box}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default RecentJob;
