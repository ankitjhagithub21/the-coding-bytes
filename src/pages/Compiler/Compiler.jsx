import React from 'react';
import CompilerBox from '../../components/CompilerBox/CompilerBox';
import data from './data';

const Compiler = () => {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center" tabIndex="0">
          Choose Your Favorite Compiler
        </h1>
        <div className="flex flex-wrap -m-4">
          {data.map((box) => (
            <CompilerBox key={box.id} data={box} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compiler;
