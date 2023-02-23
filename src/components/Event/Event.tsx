import React, { useMemo } from "react";
import EventSlider from "./EventSlider";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import {eventItems} from "../../data/constants"

const Event = () => {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (   
    <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">  
      <div className="flex flex-col w-full my-16" id="testimoni">
            
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Evnet List
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us with great
              pleasure when using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <EventSlider eventItems={eventItems}/>
            </motion.div>
          </ScrollAnimationWrapper>
         
      </div>
    </div>   
  );
};

export default Event;
