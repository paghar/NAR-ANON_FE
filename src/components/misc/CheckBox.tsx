import React from "react";

interface ITextBoxProps {
  id?: string;  
  value:string, 
  onChange: (event: any) => void;   
}

const CheckBox = ({id,value,onChange}: ITextBoxProps) => { 
  return (
    <input 
      id={id}                 
      type="checkbox" 
      value={value}
      onChange={onChange}
      className="
        w-4 h-4 
        m-2
        text-blue-600 
        bg-gray-100 
        border-gray-300 
        rounded 
        focus:ring-blue-500 
        dark:focus:ring-blue-600 
        dark:ring-offset-gray-800 
        focus:ring-2 
        dark:bg-gray-700 
        dark:border-gray-600"
    />
  );
};

export default CheckBox;

