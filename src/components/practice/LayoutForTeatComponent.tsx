import React from "react";

type Props = {
  children: React.ReactNode;
};

export const LayoutForTeatComponent = (props: Props) => {
  return (
    <>
      {/* for screen container */}
      <div className="py-12 bg-white">
        {/* fpr RWD */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="lg:text-center items-center mx-auto">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};
