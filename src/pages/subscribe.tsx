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

import {useForm, Controller} from "react-hook-form";
import PhoneInput, {isValidPhoneNumber} from "react-phone-number-input";
import {useRouter} from "next/router";


const subscribe = () => {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const {t} = useTranslation("common");
  const {locale} = useRouter();

  const {control, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      job:"",
      address:"",
      postalCode:"",
      telephon:"",
      email:"",
      condition:"",
      reasonText:""
    }
  });
  const onSubmit = (data:any) => console.log(data);
 
  return (
    <div className="max-w-screen-xl mt-36 mb-4 px-8 xl:px-16 mx-auto"> 
      <ScrollAnimationWrapper>
        <motion.div className="" variants={scrollAnimation}>
          
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="flex form-group">

              <Controller
                control={control}
                rules={{
                  required: true,
                  maxLength: 30,
                }}
                render={({field: {onChange, value}}) => (
                  <TextBox 
                    id="firstName" 
                    type="input"
                    placeholder={t("membership.name")??"Name"}
                    value={value}
                    onChange={onChange} 
                  />
                )}
                name="firstName"
              />
              {errors.firstName && <span className="text-red-500 text-lg">*</span>}

              <Controller
                control={control}
                rules={{
                  required: true,
                  maxLength: 30,
                }}
                render={({field: {onChange, value}}) => (
                  <TextBox 
                    id="lastName"  
                    type="input"
                    placeholder={t("membership.family")??"Familie"} 
                    value={value}
                    onChange={onChange} 
                  />    
                )}
                name="lastName"
              />
              {errors.firstName && <span className="text-red-500 text-lg">*</span>}          
             
            </div>

            <div className="flex form-group">

              <TextBox 
                id="brithday"
                type="input"
                placeholder={t("membership.brithday")??"Geburtstag"}
                value="" 
                onChange={()=>null} 
              />

              <Controller
                control={control}
                rules={{
                  required: true,
                  maxLength: 30,
                }}
                render={({field: {onChange, value}}) => (
                  <TextBox 
                    id="job"  
                    type="input"
                    placeholder={t("membership.job")??"Arbeit"} 
                    value={value}
                    onChange={onChange} 
                  />    
                )}
                name="job"
              />
              {errors.job && <span className="text-red-500 text-lg">*</span>}  

            </div>     

            <div className="flex form-group">

              <Controller
                control={control}
                rules={{
                  required: true,
                  maxLength: 30,
                }}
                render={({field: {onChange, value}}) => (
                  <TextBox 
                    id="address"  
                    type="input"
                    placeholder={t("membership.address")??"Adresse"}
                    value={value}
                    onChange={onChange} 
                  />    
                )}
                name="address"
              />
              {errors.address && <span className="text-red-500 text-lg">*</span>}  

              <Controller
                control={control}
                rules={{
                  required: true,
                  maxLength: 30,
                }}
                render={({field: {onChange, value}}) => (
                  <TextBox 
                    id="postalCode"  
                    type="input"
                    placeholder={t("membership.postal-code")??"Postleitzahl"}
                    value={value}
                    onChange={onChange} 
                  />    
                )}
                name="postalCode"
              />
              {errors.postalCode && <span className="text-red-500 text-lg">*</span>}              
                      
            </div>   

            <div className="flex form-group">

              <Controller
                control={control}
                rules={{
                  required: true,
                  maxLength: 30,
                  validate: (value) => isValidPhoneNumber(value)
                }}
                render={({field: {onChange, value}}) => (
                  <PhoneInput
                    id="telephon"
                    value={value}
                    onChange={onChange}
                    defaultCountry={locale === "fa" ? "IR" : "DE"}
                    placeholder={t("membership.phone") ?? "Telefon"}
                    className="form-control block
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
                    mb-6
                    mx-6    
                    focus:text-gray-400 focus:bg-white-300 focus:border-orange-500 focus:outline-none
                   "                    
                  />                   
                )}
                name="telephon"
              />
              {errors.telephon && <span className="text-red-500 text-lg">*</span>}  

              <Controller
                control={control}
                rules={{
                  required: true,
                  maxLength: 30,
                }}
                render={({field: {onChange, value}}) => (
                  <TextBox 
                    id="email"  
                    type="input"
                    placeholder={t("membership.email-address")??"E-Mail-Addresse"}
                    value={value}
                    onChange={onChange} 
                  />    
                )}
                name="email"
              />
              {errors.email && <span className="text-red-500 text-lg">*</span>}  

                  
            </div>

            <div className="flex form-group">
              <Controller
                control={control}
                rules={{
                  required: true,                 
                }}
                render={({field: {onChange, value}}) => (
                  <TextBox 
                    id="reasonText"  
                    type="textarea"
                    rows={8}
                    placeholder={t("membership.request-reason")??"Anfragegrund"}
                    value={value}
                    onChange={onChange} 
                  />    
                )}
                name="reasonText"
              />
              {errors.reasonText && <span className="text-red-500 text-lg">*</span>}  

            </div>

            <div className="flex my-4 mx-6">
              <div className="flex items-center h-5">                
                <Controller
                  name="condition"
                  control={control}
                  rules={{required: true}}
                  render={({field: {onChange, value}}) => (
                    <CheckBox
                      value={value}
                      id="condition"
                      onChange={onChange} 
                    />
                  )}
                /> 
                {errors.condition && <span className="text-red-500 text-lg">*</span>}                 
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
              <ButtonPrimary type="submit" onClick={() => null}>
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

