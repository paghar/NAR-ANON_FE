import React from "react";

interface ITextBoxProps {
  id?: string;
  type: "input" | "textarea"
  placeholder:string,
  value:string,
  rows?:number,
  onChange: (event: any) => void;   
}

const TextBox = ({id,type,rows,placeholder,value,onChange}: ITextBoxProps) => {

  const renderElement = type === "input" 
    ?
    <input
      id={id}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="form-control block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-400
       bg-white bg-clip-padding
       border border-solid border-gray-400
       rounded
       transition
       ease-in-out
       mb-6
       mx-6
       focus:text-gray-400 focus:bg-white-300 focus:border-orange-500 focus:outline-none"         
    />
    : type === "textarea" ? 
      <textarea
        id="reasonText"
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
       form-control
       block
       w-full
       px-3
       py-1.5
       text-base
       font-normal
       text-gray-400
       bg-white bg-clip-padding
       border border-solid border-gray-400
       rounded
       transition
       ease-in-out
       m-0                  
       focus:text-gray-400 focus:bg-white focus:border-orange-500 focus:outline-none"
      />
      : null;

  return (renderElement);

};

export default TextBox;

