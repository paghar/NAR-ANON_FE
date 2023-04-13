import {GetStaticPropsContext} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import React from "react";
import ButtonOutline from "@/components/misc/ButtonOutline";



const gallary = () =>{
  return(
    <div className="flex max-w-screen-xl mt-36 mb-4 px-8 xl:px-16 mx-auto">
        
      <div className="flex flex-col w-auto mr-4">
        <ButtonOutline id="item1" type="button" addClass="mb-2" onClick={()=>null}>item1</ButtonOutline>
        <ButtonOutline id="item1" type="button" addClass="mb-2" onClick={()=>null}>item2</ButtonOutline>
        <ButtonOutline id="item1" type="button" addClass="mb-2" onClick={()=>null}>item3</ButtonOutline>            
      </div>

      <div className="w-10/12">
        <div 
          className="
            font-medium tracking-wide py-2 px-5 sm:px-8 border
            border-orange-500 text-orange-500 bg-white-500 
            outline-none rounded-l-full rounded-r-full capitalize
            hover:bg-orange-500 hover:text-white-500 
            transition-all hover:shadow-orange "
        >
             pictures
        </div>
      </div>

    </div>
  ); 
};

export async function getStaticProps({locale}:GetStaticPropsContext){
  return{
    props:{
      ...(await serverSideTranslations(locale?? "de",["common"]))
    }
  };
}

export default gallary;