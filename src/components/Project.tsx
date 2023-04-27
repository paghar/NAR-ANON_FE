import React, { useMemo } from "react";
import { IPlan } from "../data/interface";
import ButtonOutline from "./misc/ButtonOutline";
import Card from "./Card";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import Link from "next/link";

interface IProps {
  projectTitle: string;
  projectDescription: string;
  projectItems: IPlan[];
}

const Project = ({ projectTitle, projectDescription, projectItems }: IProps) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const { t } = useTranslation("common");
  const { push } = useRouter();

  const readMore = () => {
    push("/plane");
  };

  return (
    <div className="flex flex-col items-center" id="Project">
      {/* :TITLE CONTAINER */}
      <ScrollAnimationWrapper>
        <motion.h3
          variants={scrollAnimation}
          className="max-w-2xl text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal mx-auto"
        >
          {projectTitle}
        </motion.h3>
        <motion.p
          variants={scrollAnimation}
          className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
        >
          {projectDescription}
        </motion.p>
      </ScrollAnimationWrapper>

      {/* :SCHEDULE */}

      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <div className="flex flex-wrap mt-4" aria-label="schedule events">
            {projectItems.map(({ id, attributes }) => (
              <div className="w-2/5 m-2 border-2 border-gray-100" key={id}>
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

      <Link href="/plans/project">
        <ButtonOutline type="button" onClick={() => null}>
          {t("button.read-info")}
        </ButtonOutline>
      </Link>
    </div>
  );
};

export default Project;
