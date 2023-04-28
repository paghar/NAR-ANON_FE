import React from "react";

interface IBtnProps {
  id?: string;
  type: "button" | "submit" | "reset";
  onClick: (event: any) => void;
  children?: React.ReactNode;
  addClass?:string;
}

const ButtonUnderline = ({id, type, onClick,addClass, children}: IBtnProps) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={`
        group relative 
        px-5 py-2.5 border-none 
        bg-transparent outline-none 
        text-base text-black-500 
        hover:font-semibold active:top-0.5 active:outline-none focus:outline-none  ${addClass}
      `}
    >
      {children}

      {/* Top line */}
      <span 
        className="
          absolute top-full left-0 w-full h-0.5 border-2
          border-gray-500 transition-all duration-300 transform scale-90 group-hover:top-0 group-hover:scale-100
        " 
        aria-hidden="true"
      />

      {/* Left line */}
      <span 
        className="
          absolute top-full left-0 w-0.5 h-0 border-2 
          border-gray-500 transition-all duration-300 transform scale-90 group-hover:top-0 group-hover:h-full group-hover:scale-100"
        aria-hidden="true"
      />
      
      {/* Right line */}
      <span 
        className="
          absolute top-full right-0 w-0.5 h-0 border-2 
          border-gray-500 transition-all duration-300 transform scale-90 group-hover:top-0 group-hover:h-full group-hover:scale-100" 
        aria-hidden="true"
      />
      
      {/* Bottom line */}
      <span 
        className="
          absolute top-full left-0 w-full h-0.5 border-2 
          border-gray-500 transition-all duration-300 transform scale-90 group-hover:scale-100"
        aria-hidden="true"
      />

    </button>

  );
};

export default ButtonUnderline;
