import React, { useState } from 'react';
import { Modal } from '../../../../modals';
import { FeatureSections } from '../../../containers/CenterSection/FeatureSections';

export const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="font-black uppercase text-9xl">About Page</h1>
      <FeatureSections />
      <button onClick={openModal} className="p-2 m-2 bg-green-200 rounded-3xl">
        open modal
      </button>
      {isOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};
