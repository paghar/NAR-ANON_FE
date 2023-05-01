import Hero from "@/components/Hero";
import {members} from "../data/constants/members";
import {useTranslation} from "next-i18next";

const HeroContainer = () => {
  
  const {t} = useTranslation("common");

  const tabs = [
    {title:t("union-title"),context:t("union-description")},
    {title:t("partners-and-sponsors-title"),context:t("partners-and-sponsors-description")},
    {title:t("statute-title"),context:t("statute-description")},
  ];


  return(
    <Hero  tabs={tabs} />
  );
};

export default HeroContainer;