import React from 'react';

interface Props {}

export const Second: React.FC<Props> = () => {
  return (
    <div>
      <div className="grid grid-flow-col grid-rows-3 gap-4 m-20 bg-white divide-x max-w-screen divide-slate-700">
        <div className="md:max-w-[400px] row-span-3 p-5 my-5 ml-20 text-right bg-red-500 ">
          ing trends and identifying technology potential across different
          sectors, in turn providing
        </div>
        <div className="col-span-2 p-5 m-5 ml-20 bg-red-500 min-w-4xl">
          <p>1</p>
          <hr />
          <p>
            My diverse experience enables me to gain actionable insights by
            comparing trends and identifying technology potential across
            different sectors, in turn providing myself with tools and knowledge
            for growth. -Lingoda -Hobbis/Photography -Zion
          </p>
        </div>
        <div className="col-span-2 p-5 m-5 ml-20 min-w-4xl">03</div>
      </div>
    </div>
  );
};
