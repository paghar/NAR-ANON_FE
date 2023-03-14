
import React from "react";
import Image from "next/image";
import ButtonPrimary from "@/components/misc/ButtonPrimary";

const Page404 = () => {
  return (
    <div className="relative py-16 px-4 w-full min-h-screen bg-gray-50">
      <div className="flex flex-col items-center">

        <div className="text-center space-y-5">
          <p className="text-6xl sm:text-7xl text-orange-500 font-bold tracking-wide">404</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-black-500 font-semibold capitalize">This page does not exist</h1>
          <p className="text-sm text-black-500 font-medium">Sorry! We could not find the page you are looking for. Please check URL in address bar and try again.</p>
        </div>
      
        <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <ButtonPrimary>Get back to Homepage</ButtonPrimary>  
          <ButtonPrimary>Contact Support</ButtonPrimary>          
        </div>

        <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <Image                    
            src="/assets/page404.png"
            alt="404Page"
            quality={100}
            width={100}
            height={100}
            layout="responsive"
          />
        </div>          

      </div>
    </div>
  );
};

export default Page404;
