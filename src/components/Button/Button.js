import React from "react";

function Button({ isDark = false, children, ...rest }) {
  const darkClasses = "text-light bg-primary-dark ";
  const lightClasses = "text-dark bg-light hover:text-light ";
  return (
    <button
      {...rest}
      className={`${
        isDark ? darkClasses : lightClasses
      }hover:bg-primary-faded w-full min-h-[56px] rounded-[8px] uppercase text-[15px] font-medium tracking-[1px] transition-colors`}
    >
      {children}
    </button>
  );
}

export default Button;
