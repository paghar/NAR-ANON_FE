import React from "react";

import {GetStaticPropsContext} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const plane = () =>{  
  return(
    <div className="flex flex-col max-w-screen-xl mt-36 mb-4 px-8 xl:px-16 mx-auto">

      <h2 className="text-5xl font-normal leading-normal mt-0 mb-2">
        Tailwind Starter Kit
      </h2>
      
      <small className="font-normal leading-normal mt-0 mb-4">
        I will be the leader of a company that ends up being worth billions
        of dollars, because I got the answers. I understand culture. I am
        the nucleus. I think that’s a responsibility that I have, to push
        possibilities, to show people, this is the level that things could
        be at.
      </small>

      <p className="text-lg font-normal leading-relaxed mt-6 mb-4">
        I will be the leader of a company that ends up being worth billions
        of dollars, because I got the answers. I understand culture. I am
        the nucleus. I think that’s a responsibility that I have, to push
        possibilities, to show people, this is the level that things could
        be at.
        <br/>
        I will be the leader of a company that ends up being worth billions
        of dollars, because I got the answers. I understand culture. I am
        the nucleus. I think that’s a responsibility that I have, to push
        possibilities, to show people, this is the level that things could
        be at.
        <br/>
        I will be the leader of a company that ends up being worth billions
        of dollars, because I got the answers. I understand culture. I am
        the nucleus. I think that’s a responsibility that I have, to push
        possibilities, to show people, this is the level that things could
        be at.
      </p>     
      
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

export default plane;