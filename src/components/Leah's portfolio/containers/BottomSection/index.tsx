import React, { useState } from 'react';
import { Footer } from './Footer';

const BottomSection = () => {
  //   const [isOpen, setIsOpen] = useState<boolean>(false);

  //   const toggle: () => void = () => {
  //     setIsOpen(!isOpen);
  //   };

  return (
    <footer className="flex justify-center max-w-full p-8 max-h-fit bg-secondary-50">
      <Footer />
    </footer>
  );
};

export default BottomSection;
