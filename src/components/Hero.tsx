import React, {useMemo} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Tabs from "./misc/Tabs";
import {ITab} from "@/data/interface";
import {useTranslation} from "next-i18next";
import {useMembers} from "@/hooks/useMembers";
import {useRouter} from "next/router";

interface IProps {
  tabs: ITab[];
}

const Hero = ({tabs}: IProps) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const {t} = useTranslation("common");

  const {locale} = useRouter();
  const {data: members} = useMembers({locale});

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
              <strong>{t("community.title")}</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              <span className="block">{t("community.address")}</span>
              <span className="block">{t("community.phone")}</span>
              <span className="block">{t("community.email")}</span>
            </p>
          </div>

          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/iran.png"
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
          <div >
            <Tabs tabs={tabs} />
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* Member */}
      <div className="relative w-full h-full flex">
        <ScrollAnimationWrapper viewAmount={0.2} className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 bg-white-500 z-10">
          {members?.map(({id, attributes}, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={id}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="bg-white font-semibold text-center rounded-3xl border border-gray-100 shadow-lg p-10 max-w-xs">
                <img
                  className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto"
                  src={attributes.image}
                  alt="product designer"
                />
                <h1 className="text-lg text-gray-700"> {attributes.name} </h1>
                <h3 className="text-sm text-gray-400 "> {attributes.role} </h3>
                <p className="text-xs text-gray-400 mt-4 h-[98px] overflow-y-auto custom-scrollbar">{attributes.description}</p>
                <div className="flex justify-center gap-2 mt-3">
                  {attributes?.socials.data?.map(({id, attributes}) => (
                    <a key={id} href={attributes.link} target="_blank" rel="noreferrer">
                      <img src={attributes.icon} alt={attributes.name} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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
