import React from "react";

function Button({ isDark, children }) {
  const darkClasses = "text-light bg-primary-dark ";
  const lightClasses = "text-dark bg-light hover:text-light ";
  return (
    <button
      className={`${
        isDark ? darkClasses : lightClasses
      }hover:bg-primary-faded min-w-[152px] min-h-[56px] rounded-[8px] uppercase text-[15px] font-medium tracking-[1px] transition-colors`}
    >
      {children}
    </button>
  );
}

export default Button;
