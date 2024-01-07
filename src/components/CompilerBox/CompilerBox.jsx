import React from 'react';

const CompilerBox = ({ data }) => {
  return (
    <div className="p-4 md:w-1/2 lg:w-1/3 w-full">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={data.img}
          alt={`Compiler ${data.name}`}
        />
        <div className="p-2 border-t-2 text-white" style={{ backgroundColor: '#7936D9' }}>
          <h2 className="font-bold text-xl" tabIndex="0">
            {data.name} Online Compiler
          </h2>
          <p className="leading-relaxed mb-3" tabIndex="0">
            Compile and run your {data.name} programs. You can also download the source code.
          </p>
          <button className="w-full border py-2 rounded text-white font-bold hover:bg-indigo-500">
            Open
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompilerBox;
