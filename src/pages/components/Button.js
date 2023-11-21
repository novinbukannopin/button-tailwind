import React from "react";

export default function Button({ children, className, ...props }) {
  return (
    <>
      <button
        {...props}
        className={`${
          className
            ? className
            : "bg-blue-500 focus:ring-blue-400  hover:bg-blue-600"
        }  px-6 py-2.5 rounded-md  font-semibold focus:outline-none focus:ring transition duration-400 text-white`}
      >
        {children}
      </button>
    </>
  );
}
