import React from "react";

interface IBtnProps {
  id?: string,
  type:"button" | "submit" | "reset", 
  onClick:(event: any)=>void,
  children?: React.ReactNode,
  addClass?:string
}

const ButtonPrimary = ({id,type,onClick,children, addClass}: IBtnProps) => {
  return (
    <button
      id={id}
      className={
        `py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg 
        bg-orange-500 hover:shadow-orange-md transition-all outline-none ${addClass}`
      }
      type={type}
      onClick={onClick}   
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
