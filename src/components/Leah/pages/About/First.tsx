import React from 'react';

interface Props {}

export const First: React.FC<Props> = () => {
  return (
    <div className="flex flex-col items-center justify-around text-lg md:h-screen ">
      <div className="p-5 text-gray-300 border-b-2 border-gray-300">
        {' '}
        part of me
      </div>
      <div className="flex flex-col items-center w-screen divide-gray-300 md:divide-x-2 md:flex-row md:h-screen indent-8 ">
        <div className="w-full md:w-1/2 ">
          <div className="p-10">
            <div className=" md:ml-10 lg:p-20">
              <p className="p-2 text-lg font-bold leading-relaxed text-gray-300">
                - Part of me like coding.
              </p>
              <p className="text-gray-400">
                My aspiration is to be a creator related to new technology.
                There are endless things to learn in the tech industry, and
                there are also so many possibilities. I like to conceptualize
                and implement creative ideas by myself and build the sight to
                showcase them. Thus, I found I like and enjoy spending my time
                absorbing this knowledge and information on coding. Just deem
                these challenges as my nutrients to grow and be brave no matter
                what you encounter.
              </p>
            </div>
          </div>
        </div>
        <div className="p-10 md:w-1/2 ">
          <div className=" md:mr-10 lg:p-20">
            <p className="p-2 text-lg font-bold leading-relaxed text-gray-300">
              - Part of me like designing.
            </p>
            <p className="text-gray-400">
              Using perspective or business insight to have an impact on User
              Experience and User Interface is engaging. Bringing people a
              better concept to life through designing can let us look forward
              to the new look of the future together. Moreover, being enrolled
              in commercial design courses broadened my horizons and taught me
              to embrace diverse views on art.
            </p>
          </div>
        </div>
      </div>
      <div className="p-5 text-gray-300 border-t-2 border-gray-300">
        part of me
      </div>
    </div>
  );
};
