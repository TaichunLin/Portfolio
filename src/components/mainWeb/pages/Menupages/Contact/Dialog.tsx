import { useState } from 'react';

interface Props {
  closeModal: () => void;
  name: string;
  email: string;
}

export const Dialog: React.FC<Props> = ({ closeModal, name, email }) => {
  return (
    <div className="fixed top-0 flex items-center justify-center w-screen h-screen text-center bg-bg/90">
      <div className="w-1/2 p-10 bg-white rounded-lg shadow-xl min-h-1/2">
        <div className="flex justify-end">
          <button onClick={closeModal}> X </button>
        </div>
        <div className="flex flex-col items-center justify-center p-10 mt-16">
          <div>
            <h1 className="mb-5 font-black uppercase">
              leah has received your email
            </h1>
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
              className="h-10 p-2 m-2 bg-yellow-700 rounded-lg w-28"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
