import React, {useMemo} from "react";

import ButtonOutline from "./misc/ButtonOutline";
import Card from "./Card";

import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import {motion} from "framer-motion";

import {useRouter} from "next/router";
import Link from "next/link";

import {IPlan} from "../data/interface";
import {useTranslation} from "next-i18next";

interface IProps {
  projectTitle: string;
  projectDescription: string;
  projectItems: IPlan[];
}

const Project = ({projectTitle, projectItems}: IProps) => {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const {t} = useTranslation("common");
  const {push} = useRouter();

  return (
    <div className="flex flex-col items-center justify-center" id="Project">   

      {/* :TITLE CONTAINER */}
      <div className="w-10/12 md:w-7/12 lg:w-1/2 mb-16">       
        <ScrollAnimationWrapper>
          <motion.h1
            variants={scrollAnimation}
            className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800"
          >
            {projectTitle}
          </motion.h1>
          {/* <motion.p
            variants={scrollAnimation}
            className="text-base leading-normal text-center text-gray-600 mt-5"
          >
            {projectDescription}
          </motion.p> */}
        </ScrollAnimationWrapper>
      </div>

      {/* :SCHEDULE */}
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <div className="flex flex-wrap gap-2 mt-4 items-center justify-between px-3" aria-label="schedule events">
            {projectItems.map(({id, attributes}) => (
              <div className="w-[49%] h-60  border-2 border-gray-100" key={id}>
                <Card
                  date="2023"
                  thumbnail={attributes.thumbnail}
                  title={attributes.title}
                  description={attributes.description}
                  btnText={t("button.read-info")}
                  readMore={()=>push(`/plan/${attributes.slug}`)}
                />
              </div>
            ))}
          </div>
        </motion.div>
      </ScrollAnimationWrapper>

      {/* :Button */}
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <Link href="/plans/project">
            <ButtonOutline addClass="mt-8" type="button" onClick={() => null}>
              {t("button.read-info")}
            </ButtonOutline>
          </Link>
        </motion.div>
      </ScrollAnimationWrapper>

    </div>
  );
};

export default Project;
