import {GetStaticPropsContext} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Gallery from "../components/Gallery";
import PlanesContainer from "../container/Plans";
import Hero from "../container/Hero";
import {QueryClient, dehydrate} from "react-query";
import {fetchPlans} from "@/hooks/usePlans";
import {fetchGalleries} from "@/hooks/useGalleries";

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
  const queryClient = new QueryClient();

  const eventFilters = "filters[type][$eq]=event";
  const projectFilters = "filters[type][$eq]=project";
  const pagination = "pagination[start]=0&pagination[limit]=6";
  const galleryFilters =  "filters[banner][$eq]=true";
  const galleryPagination = "pagination[start]=0&pagination[limit]=14";


  await queryClient.prefetchQuery(["plans", eventFilters, pagination, locale??'de', undefined], () =>
    fetchPlans(locale ?? "de", eventFilters, pagination, undefined)
  );

  await queryClient.prefetchQuery(["plans", projectFilters,pagination, locale??'de', undefined], () =>
    fetchPlans(locale ?? "de", projectFilters, pagination, undefined)
  );

  await queryClient.prefetchQuery(["galleries", galleryFilters, galleryPagination, locale], () =>
    fetchGalleries(locale ?? "de", galleryFilters,galleryPagination)
  );

  return {
    revalidate: 60 * 60 * 24, // 24H
    props: {
      dehydratedState:JSON.parse(JSON.stringify(dehydrate(queryClient))),
      ...(await serverSideTranslations(locale ?? "de", ["common", "home"]))
    }
  };
}
