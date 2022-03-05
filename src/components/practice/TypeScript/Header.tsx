import React, { useState } from "react";
interface HeaderProps {
  buttonText: string;
}

const Header = (props: HeaderProps) => {
  const [count, setCount] = useState(0);
  const HandleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Header</h1>
      <button
        onClick={HandleOnClick}
        className=" p-2 m-2 bg-violet-500 hover:bg-violet-600 active:bg-violet-700  focus:ring rounded-lg"
      >
        {props.buttonText}
      </button>
      <p>{count}</p>
    </>
  );
};

export default Header;
