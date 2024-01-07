import React from 'react';
import CodeBox from '../../components/CodeBox/CodeBox';
import code from './data';

const Code = () => {
  return (
    <section>
      <div className="container px-5 py-24 mx-auto min-h-screen">
        <h1 className="text-4xl font-bold mb-10 text-center">Explore</h1>
        <div className="flex flex-wrap -m-4">
          {code.map((box) => (
            <CodeBox key={box.id} data={box} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Code;
