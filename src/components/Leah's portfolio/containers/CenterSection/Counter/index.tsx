import React, { useState } from 'react';
interface Props {
  buttonText: string;
}

const Counter: React.FC<Props> = ({ buttonText }) => {
  const [count, setCount] = useState(0);
  const HandleOnClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-slate-400">
      <h1>Counter</h1>
      <button
        onClick={HandleOnClick}
        className="p-2 m-2 rounded-lg bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:ring"
      >
        {buttonText}
      </button>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
