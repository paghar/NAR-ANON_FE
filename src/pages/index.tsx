import Gallary from "../components/Gallary";
import PlanesContainer from "../container/Planes";
import Hero from "../container/Hero";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticPropsContext} from "next";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallary />
      <PlanesContainer />
    </>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "de", ["common"]))
      // Will be passed to the page component as props
    }
  };
}
