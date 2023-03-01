import Hero from "@/components/Hero";
import {members} from "../data/constants/members";
import {tabs} from "../data/constants/tabs";


const HeroContainer = () => {
  return(
    <Hero members={members} tabs={tabs} />
  );
};

export default HeroContainer;