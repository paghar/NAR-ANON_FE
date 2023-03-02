import React, {useMemo} from "react";
import ButtonPrimary from "@/components/misc/ButtonPrimary";
import ScrollAnimationWrapper from "@/components/Layout/ScrollAnimationWrapper";
import {motion} from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";
import LogoVPN from "../../public/assets/Logo.svg";


const subscribe = () =>{  

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  
  return(
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" >

      {/* Header */}
      <ScrollAnimationWrapper>
        <motion.div
          className=""
          variants={scrollAnimation}>

          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">              
              <strong>Iranischer Kulturverein Sachsen e.V.</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              <span className="block">Geschäftstelle: Lingneralle 3, 01069 Dresden</span>
              <span className="block">Tel.: 0351-83383495 </span>
              <span className="block">E-Mail: semino@t-online.de </span>                      
            </p>              
          </div>
            
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <LogoVPN className="w-32 h-32"/>
            </motion.div>
          </div>

        </motion.div>
      </ScrollAnimationWrapper>  

      <ScrollAnimationWrapper>
        <motion.div
          className=""
          variants={scrollAnimation}>

          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">            
            <p className="text-black-500 mt-4 mb-6">
              We regularly hold free information seminars on the subject of applications.
              In about an hour we provide information about the possibilities and challenges in the search for the right job.
              We regularly hold free information seminars on the subject of applications.
              In about an hour we provide information about the possibilities and challenges in the search for the right job.                    
            </p>              
          </div>

        </motion.div>
      </ScrollAnimationWrapper>  

      {/* Header */}
      <ScrollAnimationWrapper>
        <motion.div
          className=""
          variants={scrollAnimation}>

          <form>
            <div className="form-group mb-6">
              <input type="text" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-400
                  bg-white bg-clip-padding
                  border border-solid border-gray-400
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-400 focus:bg-white-300 focus:border-orange-500 focus:outline-none" id="exampleInput7"
              placeholder="Name"/>
            </div>

            <div className="form-group mb-6">
              <input type="text" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-400
                  bg-white bg-clip-padding
                  border border-solid border-gray-400
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-400 focus:bg-white-300 focus:border-orange-500 focus:outline-none" id="exampleInput7"
              placeholder="BrithDay"/>
            </div>

            <div className="form-group mb-6">
              <input type="text" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-400
                  bg-white bg-clip-padding
                  border border-solid border-gray-400
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-400 focus:bg-white-300 focus:border-orange-500 focus:outline-none" id="exampleInput7"
              placeholder="Job"/>
            </div>

            <div className="form-group mb-6">
              <input type="text" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-400
                  bg-white bg-clip-padding
                  border border-solid border-gray-400
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-400 focus:bg-white-300 focus:border-orange-500 focus:outline-none" id="exampleInput7"
              placeholder="Adress"/>
            </div>

            <div className="form-group mb-6">
              <input type="text" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-400
                  bg-white bg-clip-padding
                  border border-solid border-gray-400
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-400 focus:bg-white-300 focus:border-orange-500 focus:outline-none" id="exampleInput7"
              placeholder="Postal code"/>
            </div>

            <div className="form-group mb-6">
              <input type="text" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-400
                  bg-white bg-clip-padding
                  border border-solid border-gray-400
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-400 focus:bg-white-300 focus:border-orange-500 focus:outline-none" id="exampleInput7"
              placeholder="Telephon"/>
            </div>

            <div className="form-group mb-6">
              <input type="email" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-400
                  bg-white bg-clip-padding
                  border border-solid border-gray-400
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-400 focus:bg-white-300 focus:border-orange-500 focus:outline-none" id="exampleInput8"
              placeholder="Email address"/>
            </div>
            <div className="form-group mb-6">
              <textarea className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-400
                  bg-white bg-clip-padding
                  border border-solid border-gray-400
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-400 focus:bg-white focus:border-orange-500 focus:outline-none
                " id="exampleFormControlTextarea13" rows="3" placeholder="Reguest Reason"></textarea>
            </div>      

            <ButtonPrimary
              type="button"
              onClick={()=>console.log()}
            >
              MemberShip
            </ButtonPrimary>       
           
          </form>
            
        

        </motion.div>
      </ScrollAnimationWrapper>  
      
     


    </div>
  );
};

export default subscribe;