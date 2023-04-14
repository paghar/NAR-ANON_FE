import React from "react";
import ButtonOutline from "./misc/ButtonOutline";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

const Gallary = () => {
  const {t} = useTranslation("common");
  const {push} = useRouter();

  const showMoreClick = () => {
    push("/gallary");
  };

  return (
    <div className="flex flex-col justify-center items-center my-10" id="Gallery">

      <div className="xl:w-1/2 w-11/12">
        <h1 role="heading" className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
          {t("gallary.gallary-title")}
        </h1>
        <h2 role="contentinfo" className="text-base leading-normal text-center text-gray-600 mt-5">
          {t("gallary.gallary-des")}
        </h2>
      </div>   

      <div className="lg:flex items-stretch md:mt-12 mt-8 mb-4" dir="ltr">

        <div className="lg:w-1/2">
          <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
            <div className="sm:w-1/2 relative">              
              <img src="https://i.ibb.co/DYxtCJq/img-1.png" className="w-full" alt="chair" />
            </div>
            <div className="sm:w-1/2 sm:mt-0 mt-4 relative">             
              <img src="https://i.ibb.co/3C5HvxC/img-2.png" className="w-full" alt="wall design" />
            </div>
          </div>
          <div className="relative">         
            <img src="https://i.ibb.co/Ms4qyXp/img-3.png" alt="sitting place" className="w-full mt-8 md:mt-6 hidden sm:block" />
            <img className="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
          </div>
        </div>

        <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
          <div className="relative">           
            <img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" className="w-full sm:block hidden" />
            <img className="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
          </div>
          <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
            <div className="relative w-full">          
              <img src="https://i.ibb.co/3yvZBpm/img-5.png" className="w-full" alt="chair" />
            </div>
            <div className="relative w-full sm:mt-0 mt-4">
              <img src="https://i.ibb.co/gDdnJb5/img-6.png" className="w-full" alt="wall design" />
            </div>
          </div>
        </div>

      </div>

      <ButtonOutline type="button" onClick={showMoreClick}>
        {t("button.more-picture")}
      </ButtonOutline>

    </div>
  );
};

export default Gallary;
