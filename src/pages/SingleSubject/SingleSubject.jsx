import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import code from '../Code/data';
import Box from '../../components/Box/Box';

const SingleSubject = () => {
  const { id } = useParams();

  const [sub, setSub] = useState(null);

  useEffect(() => {
    const currSub = code.find((c) => c.path === id);
    setSub(currSub);
   
  }, [id]);

  if (!sub) {
   
    return <p>Subject not found</p>;
  }

  return (
    <section aria-labelledby="subject-title">
      <div className="container px-5 py-24 mx-auto min-h-screen">
        <h1 id="subject-title" className="text-4xl font-bold mb-10 text-center">
          {sub.title}
        </h1>
        <div className="flex flex-wrap -m-4">
          {sub.programs && sub.programs.length > 0 ? (
            sub.programs.map((program) => <Box key={program.id} data={program} />)
          ) : (
            <p>No programs found for this subject.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleSubject;
