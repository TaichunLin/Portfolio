import React from "react";
import ImgOne from "../images/egg.jpg";
import ImgTwo from "../images/egg-2.jpg";

export const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img src={ImgOne} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2">Crispy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
      </div>
      <div className="menu-card">
        <img src={ImgTwo} alt="egg" className="h-full rounded mb-20 shadow" />
        <div className="center-content">
          <h2 className="text-2xl mb-2">Egg Salad</h2>
          <p className="mb-2">Crispy, delicious, and nutritious</p>
          <span>$16</span>
        </div>
      </div>
    </>
  );
};
