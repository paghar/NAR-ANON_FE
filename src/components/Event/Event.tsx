import React, {useMemo} from "react";
import EventSlider from "./EventSlider";
import {motion} from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";

interface IProps {
  eventTitle: string;
  eventDescription: string;
  eventItems: any[];
}

const Event = ({eventTitle, eventDescription, eventItems}: IProps) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center mt-14" id="Event">     
      
      {/* :TITLE CONTAINER */} 
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
      
      {/* :SCHEDULE */}
      <ScrollAnimationWrapper className="w-full flex flex-col py-12">
        <motion.div variants={scrollAnimation}>
          <EventSlider eventItems={eventItems} />
        </motion.div>
      </ScrollAnimationWrapper>
     
    </div>
  );
};

export default Event;
