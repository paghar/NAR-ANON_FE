import React, {useMemo} from "react";
import {GetStaticPropsContext} from "next";

import ButtonPrimary from "@/components/misc/ButtonPrimary";
import TextBox from "@/components/misc/TextBox";
import CheckBox from "@/components/misc/CheckBox";

import ScrollAnimationWrapper from "@/components/Layout/ScrollAnimationWrapper";
import {motion} from "framer-motion";
import getScrollAnimation from "@/utils/getScrollAnimation";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";


const subscribe = () => {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const {t} = useTranslation("common");

  return (
    <div className="max-w-screen-xl mt-36 mb-4 px-8 xl:px-16 mx-auto"> 
      <ScrollAnimationWrapper>
        <motion.div className="" variants={scrollAnimation}>
          
          <form>

            <div className="flex form-group">
              <TextBox 
                id="name" 
                type="input"
                placeholder={t("membership.name")??"Name"}
                value="" 
                onChange={()=>null} 
              />
              <TextBox 
                id="family"  
                type="input"
                placeholder={t("membership.family")??"Familie"} 
                value="" 
                onChange={()=>null} 
              />             
            </div>

            <div className="flex form-group">
              <TextBox 
                id="brithday"
                type="input"
                placeholder={t("membership.brithday")??"Geburtstag"}
                value="" 
                onChange={()=>null} 
              />
              <TextBox 
                id="job"
                type="input"
                placeholder={t("membership.job")??"Arbeit"}
                value="" 
                onChange={()=>null} 
              />               
            </div>         

            <div className="flex form-group">
              <TextBox 
                id="address"
                type="input"
                placeholder={t("membership.address")??"Adresse"}
                value="" 
                onChange={()=>null} 
              />
              <TextBox 
                id="postalCode"
                type="input"
                placeholder={t("membership.postal-code")??"Postleitzahl"}
                value="" 
                onChange={()=>null} 
              />              
            </div>   

            <div className="flex form-group">
              <TextBox 
                id="telephon"
                type="input"
                placeholder={t("membership.phone")??"Telefon"}
                value="" 
                onChange={()=>null} 
              />
              <TextBox 
                id="email"
                type="input"
                placeholder={t("membership.email-address")??"E-Mail-Addresse"}
                value="" 
                onChange={()=>null} 
              />           
            </div>

            <div className="form-group mb-6 mx-6">
              <TextBox 
                id="reasonText"
                type="textarea"
                placeholder={t("membership.request-reason")??"Anfragegrund"}
                value="" 
                rows={5}
                onChange={()=>null} 
              />                
            </div>

            <div className="flex my-4 mx-6">
              <div className="flex items-center h-5">
                <CheckBox
                  value="" 
                  id="condition"
                  onChange={()=>null} 
                />
              </div>
              <div className="ml-2 text-sm">
                <label  className="font-medium text-gray-900 dark:text-gray-300">
                  {t("membership.condition-title")}
                </label>
                <p 
                  id="helper-checkbox-text" 
                  className="text-xs font-normal text-gray-300 dark:text-gray-300">
                  {t("membership.condition-context")}
                </p>
              </div>
            </div>

            <div className="flex justify-end mx-6">
              <ButtonPrimary type="button" onClick={() => null}>
                {t("button.send")??"Schicken"}
              </ButtonPrimary>
            </div>           

          </form>
          
        </motion.div>
      </ScrollAnimationWrapper>

    </div>
  );
};

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "de", ["common"]))      
    }
  };
}

export default subscribe;

