import { useState } from 'react';
import { Lingoda } from '../../model/AboutMe';

interface Props {
  closeModal: () => void;
}

export const Dialog: React.FC<Props> = ({ closeModal }) => {
  return (
    <div className="fixed top-0 flex items-center justify-center w-screen h-screen text-center text-gray-300 bg-bg/90">
      <div className="w-2/3 p-10 bg-gray-700 rounded-lg shadow-xl min-h-1/2">
        <div className="flex justify-end">
          <button onClick={closeModal}> X </button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-10">
            <span className="mb-5 text-2xl font-black text-gray-100">
              {' '}
              Feedback from Lingoda teachers ☺
            </span>
            <hr />
          </div>

          <div className="w-2/3 mb-10 text-sm transition duration-200 ease-in-out ">
            <div className="flex flex-col overflow-scroll bg-gray-300 rounded-lg h-96 scroll-smooth snap-y snap-mandatory">
              {Lingoda.map((feedback) => (
                <div
                  key={feedback.id}
                  className=" flex flex-col shadow-md m-5 transition duration-200 ease-in-out  bg-gray-700/70 rounded-lg cursor-pointer hover:scale-[1.02] p-7 w-fit flex-shrink-0 snap-always snap-center"
                >
                  <p className="text-left text-gray-100">{feedback.descr}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-row items-center justify-center mt-10 ">
              <button
                onClick={closeModal}
                type="button"
                className="h-10 p-2 m-2 text-gray-700 transition duration-200 ease-in-out bg-gray-100 rounded-lg w-28 hover:bg-gray-300"
              >
                done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
