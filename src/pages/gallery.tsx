import React, {useState} from "react";

import {GetStaticPropsContext} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

import ButtonOutline from "@/components/misc/ButtonOutline";
import PhotoAlbum from "react-photo-album";

import photos from "@/components/photos";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";


const gallary = () =>{
   
  const [index, setIndex] = useState(-1);
  
  const slides = photos.map(({src, width, height, images}) => ({
    src,
    width,
    height,
    srcSet: images.map((image:any) => ({
      src: image.src,
      width: image.width,
      height: image.height,
    })),
  }));


  return(
    <div className="flex max-w-screen-xl mt-36 mb-4 px-8 xl:px-16 mx-auto">

      <div className="flex flex-col w-auto mx-4">
        <ButtonOutline id="item1" type="button" addClass="mb-2" onClick={()=>null}>item1</ButtonOutline>
        <ButtonOutline id="item1" type="button" addClass="mb-2" onClick={()=>null}>item2</ButtonOutline>
        <ButtonOutline id="item1" type="button" addClass="mb-2" onClick={()=>null}>item3</ButtonOutline>            
      </div>

      <div className="w-10/12">
        <PhotoAlbum photos={photos} layout="rows" targetRowHeight={150} onClick={({index}) => setIndex(index)} /> 
        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}          
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
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