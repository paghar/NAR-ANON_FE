import {GetStaticPropsContext} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Gallery from "../components/Gallery";
import PlanesContainer from "../container/Planes";
import Hero from "../container/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <PlanesContainer />
    </>
  );
}

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "de", ["common","home"]))
    }
  };
}
