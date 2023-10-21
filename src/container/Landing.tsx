import Hero from "./Hero";
import Gallery from "@/components/Gallery";
import PlanesContainer from "./Plans";
import {useRouter} from "next/router";
import {useMembers} from "@/hooks/useMembers";
import {useCommunityInfo} from "@/hooks/useCommunityInfo";
import {IInfoItem} from "@/data/interface";
import {InfoAction, InfoType} from "@/data/enum";
import {useInfosDispatch} from "@/context/communityInfo";
import {useEffect} from "react";

const Landing = (()=>{

  const {locale} = useRouter();
  const dispatch = useInfosDispatch();
  const {data: members} = useMembers({locale});
  const {data: communityInfo} = useCommunityInfo({locale}); 

  const tabs: IInfoItem[]=[] ;
  communityInfo?.map((item:any)=>{
    if (item.attributes.type === InfoType.TAB) {
      tabs.push({title:item.attributes.title,context:item.attributes.description});
    } 
  });

  const title:any=[];
  communityInfo?.map((item:any)=>{
    if (item.attributes.type === InfoType.TITLE) {
      title.push({title:item.attributes.title,context:item.attributes.description});
    } 
  });

  const contact:any=[];
  communityInfo?.map((item:any)=>{
    if (item.attributes.type === InfoType.CONTACT) {
      contact.push({title:item.attributes.title,context:item.attributes.description});
    } 
  });

  const imageBanner:any=[];
  communityInfo?.map((item:any)=>{
    if (item.attributes.type === InfoType.BANNER) {
      imageBanner.push({title:item.attributes.title,context:item.attributes.image});
    } 
  });
  
  const imageLogo:any=[];
  communityInfo?.map((item:any)=>{
    if (item.attributes.type === InfoType.LOGO) {
      imageLogo.push({title:item.attributes.title,context:item.attributes.image});
    } 
  });
 
  useEffect(()=>{  
    dispatch({
      type: InfoAction.SetAboutTab,
      payload: tabs??[],
    });

    dispatch({
      type: InfoAction.SetAboutTitle,
      payload: title[0],
    });

    dispatch({
      type: InfoAction.SetContact,
      payload: contact[0],
    });
    
    dispatch({
      type: InfoAction.SetBanner,
      payload: imageBanner[0],
    });

    dispatch({
      type: InfoAction.SetLogo,
      payload: imageLogo[0],
    });

    dispatch({
      type: InfoAction.SetMember,
      payload: members,
    });
  });



  return(
    <>
      <Hero />
      <Gallery />
      <PlanesContainer />
    </>
  );
});

export default Landing;
