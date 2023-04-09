import Hero from "@/components/Hero";
import {members} from "../data/constants/members";
import { useTranslation } from "next-i18next";

const HeroContainer = () => {
  
  const {t} = useTranslation("common");

  const tabs = [
    {title:t("community.about-us-title"),context:t("community.about-us-context")},
    {title:t("community.vision-mission-title"),context:t("community.vision-mission")},
    {title:t("community.history-title"),context:t("community.history")},
  ];


  return(
    <Hero members={members} tabs={tabs} />
  );
};

export default HeroContainer;