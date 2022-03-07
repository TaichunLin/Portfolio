import React, { useState, useEffect } from "react";
import { Footer } from "./components/Footer";

import Navbar from "./components/Navbar";
import "./index.css";
import { Home } from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { Dropdown } from "./components/Dropdown";

const Egg = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle: () => void = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Routes>
        <Route path="/egg" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default Egg;
