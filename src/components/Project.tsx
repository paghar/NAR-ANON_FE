import React from "react";
import { IPlan } from "../data/interface";

interface IProps {
  projectTitle: string;
  projectDescription: string;
  projectItems: IPlan[];
}

const Project = ({ projectTitle, projectDescription, projectItems }: IProps) => {
  return (
    <div className="flex flex-col items-center">
      {/* :TITLE CONTAINER */}
      <div className="max-w-2xl text-center">
        <h2 className="text-2xl sm:text-4xl  tracking-wide">
          <span className="text-black-600">{projectTitle}</span>
        </h2>
        <p className="mt-5 text-sm text-black-600 font-medium">{projectDescription}</p>
      </div>

      {/* :SCHEDULE */}
      <div className="mt-10 max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full ">
        <ul className="flex flex-col space-y-5" aria-label="schedule events">
          {projectItems.map(({ id, attributes }) => (
            <li
              key={id}
              className="group w-full block py-3 px-4 border-2 border-gray-100 rounded-md overflow-hidden hover:border-orange-500"
            >
              {/* ::Header */}
              <div className="flex flex-col sm:flex-row sm:space-x-10">
                <p className="text-base text-gray-700 font-bold uppercase">{attributes.title}</p>
              </div>

              {/* ::Details */}
              <div className="pt-0 h-0 flex flex-col justify-between opacity-0 transition-all duration-150 ease-in transform group-hover:pt-4 group-hover:h-28 group-hover:opacity-100">
                <p className="text-xs text-gray-700 text-justify">{attributes.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
