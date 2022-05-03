import React from 'react';

interface Props {}

export const First: React.FC<Props> = () => {
  return (
    <div>
      <div className="flex flex-col divide-x-8 divide-gray-300 md:flex-row divide-dotted ">
        <div className="w-1/2 h-screen p-10 bg-purple-300 ">
          <div className="p-10 m-10 bg-white">11111</div>
        </div>
        <div className="w-1/2 h-screen p-10 bg-green-200">
          <div className="p-10 m-10 bg-white">222</div>
        </div>
      </div>
    </div>
  );
};
