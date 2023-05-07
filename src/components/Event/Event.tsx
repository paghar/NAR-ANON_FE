import React, {useMemo} from "react";
import EventSlider from "./EventSlider";
import {motion} from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import Link from "next/link";
import ButtonOutline from "../misc/ButtonOutline";
import {useTranslation} from "next-i18next";

interface IProps {
  eventTitle: string;
  eventDescription: string;
  eventItems: any[];
}

const Event = ({eventTitle, eventDescription, eventItems}: IProps) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const {t} = useTranslation("common");

  return (
    <div className=" flex flex-col w-full text-center justify-center mt-10" id="Event" >
      {/* :TITLE CONTAINER */}
      <div className="w-10/12 md:w-7/12 lg:w-1/2 mb-8 mx-auto">
        <ScrollAnimationWrapper>
          <motion.h3
            variants={scrollAnimation}
            className="text-6xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800"
          >
            {eventTitle}
          </motion.h3>
          <motion.p
            variants={scrollAnimation}
            className="text-base leading-normal text-center text-gray-600 mt-5"
          >
            {eventDescription}
          </motion.p>
        </ScrollAnimationWrapper>
      </div>

      {/* :SCHEDULE */}
      <ScrollAnimationWrapper className="w-full flex flex-col my-12" viewAmount={0.4}>
        <motion.div variants={scrollAnimation}>
          <EventSlider eventItems={eventItems} />
        </motion.div>
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper>
        <motion.div variants={scrollAnimation}>
          <Link href="/plans/event">
            <ButtonOutline addClass="" type="button" onClick={() => null}>
              {t("button.more-events")}
            </ButtonOutline>
          </Link>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Event;
