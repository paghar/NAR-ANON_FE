import React, {useMemo} from "react";
import ButtonOutline from "./misc/ButtonOutline";
import {useTranslation} from "next-i18next";
import {useGalleries} from "@/hooks/useGalleries";
import Link from "next/link";

import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import {motion} from "framer-motion";


const Gallery = () => {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const {t} = useTranslation("common");

  const {data: galleriesData} = useGalleries({
    filters: "filters[banner][$eq]=true",
    pagination: "pagination[start]=0&pagination[limit]=14"
  });
  const galleries = galleriesData ?? [];
  

  return (
    <div className="flex flex-col justify-center items-center my-10 max-w-screen-xl mx-auto " dir="ltr" id="Gallery">

      {/* :TITLE CONTAINER */}
      <div className="w-10/12 md:w-7/12 lg:w-1/2 mb-8">       
        <ScrollAnimationWrapper>
          <motion.h1
            variants={scrollAnimation}
            className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800"
          >
            {t("gallery.gallery-title")}
          </motion.h1>
          <motion.p
            variants={scrollAnimation}
            className="text-base leading-normal text-center text-gray-600 mt-5"
          >
            {t("gallery.gallery-des")}
          </motion.p>
        </ScrollAnimationWrapper>
      </div>

      {/* :GALLERY CONTAINER */}
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <div className="2xl:px-20 lg:px-12 px-4 flex items-start mt-4 mb-6">
            <div className="mt-16 md:mt-24">
              <div className="flex items-end relative">
                <img
                  src={galleries[0]?.attributes?.image || ""}                  
                  className="w-20 h-20 xs:hidden md:block lg:hidden xl:block rounded-lg mr-6 object-cover"
                />
                <img
                  src={galleries[1]?.attributes?.image || ""}                 
                  className="w-36 h-32 xl:w-48 xl:h-36 rounded-lg object-cover"
                />
              </div>
              <div className="flex items-center justify-end my-6">
                <img 
                  src={galleries[2]?.attributes?.image || ""}                   
                  className="w-64 h-56 rounded-lg object-cover"
                />
              </div>
              <div className="flex items-start">
                <img
                  src={galleries[3]?.attributes?.image || ""}                  
                  className="w-32 h-32 xl:w-48 xl:h-48 rounded-lg object-cover"
                />
                <img
                  src={galleries[4]?.attributes?.image || ""}                 
                  className="xs:hidden md:block lg:hidden xl:block  w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover "
                />
              </div>
            </div>

            <div className="ml-6 mt-20 md:mt-32 hidden xs:block">
              <img
                src={galleries[5]?.attributes?.image || ""}
                className="w-72 h-80 rounded-lg object-cover"              
              />
              <div className="flex items-start mt-6">
                <img
                  src={galleries[6]?.attributes?.image || ""}                 
                  className="w-48 h-48 rounded-lg object-cover"
                />
                <img
                  src={galleries[7]?.attributes?.image || ""}                
                  className="xs:hidden md:block lg:hidden xl:block w-20 h-20 rounded-lg ml-6 object-cover "
                />
              </div>
            </div>

            <div className="mt-14 ml-6 hidden lg:block">
              <div className="lg:flex">
                <div>
                  <img
                    src={galleries[8]?.attributes?.image || ""}                   
                    className="w-96 h-72 rounded-lg object-cover"
                  />
                </div>
                <div>
                  <div className="flex ml-6">
                    <img
                      src={galleries[9]?.attributes?.image || ""}
                      className="w-20 h-20 rounded-lg mt-14 object-cover"                    
                    />
                    <img
                      src={galleries[10]?.attributes?.image || ""}
                      className="w-20 h-24 rounded-lg ml-6 object-cover"                   
                    />
                  </div>
                  <img
                    src={galleries[11]?.attributes?.image || ""}                  
                    className="ml-6 mt-6 w-48 h-32 rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="mt-6 flex">
                <img
                  className="w-48 h-48 rounded-lg object-cover"
                  src={galleries[12]?.attributes?.image || ""}                
                />
                <img
                  className="w-72 h-56 rounded-lg ml-6 object-cover"
                  src={galleries[13]?.attributes?.image || ""}                 
                />
              </div>
            </div>
          </div>

        </motion.div>
      </ScrollAnimationWrapper>

      {/* :BUTTON */}
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <Link href="/gallery">
            <ButtonOutline type="button" onClick={() => null}>
              {t("button.more-picture")}
            </ButtonOutline>
          </Link>
        </motion.div>
      </ScrollAnimationWrapper>

    </div>
  );
};

export default Gallery;
