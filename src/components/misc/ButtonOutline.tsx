import React from "react";

interface IBtnProps {
  id?: string,
  type:"button" | "submit" | "reset", 
  onClick:(event: any)=>void,
  children?: React.ReactNode
}

const ButtonOutline = ({id,type,onClick,children}: IBtnProps) => {
  return (
    <button 
      id={id}
      className="
        font-medium tracking-wide py-2 px-5 sm:px-8 border
        border-orange-500 text-orange-500 bg-white-500 
        outline-none rounded-l-full rounded-r-full capitalize
        hover:bg-orange-500 hover:text-white-500 
        transition-all hover:shadow-orange "
      type={type}
      onClick={onClick}      
    >
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;


