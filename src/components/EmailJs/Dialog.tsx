import { useState } from 'react';

interface Props {
  closeModal: () => void;
  name: string;
  email: string;
}

export const Dialog: React.FC<Props> = ({ closeModal, name, email }) => {
  return (
    <div className="fixed top-0 flex items-center justify-center w-screen h-screen text-center text-gray-300 bg-bg/90">
      <div className="w-1/2 p-10 bg-gray-700 rounded-lg shadow-xl min-h-1/2">
        <div className="flex justify-end">
          <button onClick={closeModal}> X </button>
        </div>
        <div className="flex flex-col items-center justify-center p-10 mt-16">
          <div className="mb-10">
            <span className="text-2xl font-black text-gray-100 uppercase">
              leah
            </span>
            <span className="mb-5 text-2xl font-black text-gray-100">
              {' '}
              has received your email ☺
            </span>
            <hr />
          </div>
          <div className="mb-10">
            <p className="m-2">
              <p>
                Dear <strong>{name}</strong>,
              </p>
              thank you for your email, I will reply this account{' '}
              <strong>{email}</strong> ASAP.
            </p>
            <p>Have a good day 😀</p>
          </div>
          <div className="flex flex-row items-center justify-center m-2 ">
            <button
              onClick={closeModal}
              type="button"
              className="h-10 p-2 m-2 text-gray-700 bg-gray-100 rounded-lg w-28"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
