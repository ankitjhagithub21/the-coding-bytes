import React, { useEffect, useState } from 'react';
import code from '../Code/data';
import { useParams } from 'react-router-dom';

const ProgramPage = () => {
  const { id } = useParams();
  const [program, setProgram] = useState(null);

  useEffect(() => {
    const currProgram = code.find((c) => c.programs?.find((p) => p.id == id));
    setProgram(currProgram);
  }, [id]);

  return (
    <section className="py-24">
      <div className="border min-h-screen shadow rounded mx-5 p-3 ">
        {program ? (
          <div>
            <h1 className="text-4xl font-bold mb-6">{program.title}</h1>
            <p className="text-xl">{program.programs?.find((p) => p.id === id)?.title}</p>
          </div>
        ) : (
          <p>Program not found</p>
        )}
      </div>
    </section>
  );
};

export default ProgramPage;
