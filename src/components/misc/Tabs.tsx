import { ITab } from "@/data/interface";
import React, { useState } from "react";

interface IProps {
  tabs: ITab[];
}

const Tabs = ({ tabs }: IProps) => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <>
      <div className="mx-auto w-full max-w-5xl sm:border-b-2  border-gray-100">
        {/* :SMALL DEVICES */}
        <div className="mx-auto max-w-md sm:hidden rounded-lg border border-gray-100 overflow-hidden">
          <label htmlFor="current-tab" className="sr-only">
            Select a tab
          </label>
          <select
            name="current-tab"
            id="current-tab"
            defaultValue={
              tabs.find((tab) => tab.title === currentTab.title)?.title
            }
            className="form-select w-full sm:w-auto block border-none text-sm text-gray-500 font-semibold cursor-pointer focus:ring-0"
          >
            {tabs.map((tab) => (
              <option
                key={tab.title}
                value={tab.title}
                onClick={() => setCurrentTab(tab)}
              >
                {tab.title}
              </option>
            ))}
          </select>
        </div>

        {/* :LARGE DEVICES */}
        <div className="-mb-px hidden sm:block">
          <nav aria-label="Tabs">
            <ul className="flex flex-wrap justify-start space-x-5">
              {tabs.map((tab) => {
                return (
                  <li
                    key={tab.title}
                    className={`flex border-b-2 text-base 
                      ${
                        tab.title === currentTab.title
                          ? "border-orange-500 text-orange-500"
                          : "border-transparent text-gray-400 hover:text-gray-400 hover:border-gray-400"
                      }`}
                  >
                    <button
                      type="button"
                      className="px-2 pb-5 inline-flex items-center font-semibold"
                      onClick={() => setCurrentTab(tab)}
                    >
                      {tab.title}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-full max-w-5xl ">{currentTab?.context}</div>
    </>
  );
};

export default Tabs;
