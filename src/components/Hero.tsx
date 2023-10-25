import React, {useMemo} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Tabs from "./misc/Tabs";
import {useInfos} from "@/context/communityInfo";
import Markdown from "react-markdown";
import {InitialStateProps} from "@/data/interface";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);  
  const infos:InitialStateProps = useInfos();
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="About">
      {/* First Part */}
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              <strong>
                <Markdown>{infos?.aboutTitle?.title??""}</Markdown>               
              </strong>
            </h1>      
            <Markdown className="text-black-500 mt-4 mb-6">{infos?.aboutTitle?.context??""}</Markdown>               
          </div>

          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src={infos?.banner?.context??""}
                alt="home"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* About Us description */}
      <ScrollAnimationWrapper>
        <motion.div>
          <div>
            <Tabs tabs={infos.aboutTab} />
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Member */}
      <div className="relative w-full h-full">
        <ScrollAnimationWrapper viewAmount={0.2}>
          <motion.div
            className="rounded-lg flex flex-wrap justify-center gap-6 bg-white-500"
            custom={{duration: 2}}
            variants={scrollAnimation}
          >
            {infos?.member?.map(({id, attributes}) => (
              <div
                className="flex items-center justify-center h-52 w-52 bg-white font-semibold  rounded-3xl border border-gray-100 shadow-lg my-6"
                key={id}
              >
                <div className="p-4 text-center">
                  {attributes.image ? (
                    <img
                      className="mb-3 w-20 h-20 rounded-full shadow-lg mx-auto"
                      src={attributes.image}
                      alt="product designer"
                    />
                  ) : null}
                  <h1 className="text-lg text-gray-700"> {attributes.name} </h1>
                  <h3 className="text-sm text-gray-400 "> {attributes.role} </h3>
                  <Markdown className="text-xs text-gray-400 mt-4 h-[98px] overflow-y-auto custom-scrollbar">                    
                    {attributes.description} 
                  </Markdown>   
                  
                  <div className="flex justify-center gap-2 mt-3">
                    {attributes?.socials.data?.map(({id, attributes}) => (
                      <a key={id} href={attributes.link} target="_blank" rel="noreferrer">
                        <img src={attributes.icon} alt={attributes.name} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{filter: "blur(114px)"}}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
