import "@/styles/globals.css";
import "@/styles/slick.css";
import type {AppProps} from "next/app";
import Layout from "@/components/Layout/Layout";
import SeoHead from "@/components/SeoHead";

export default function App({Component, pageProps}: AppProps) {
  return(
    <>
      <SeoHead title="Iranian commuity" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>    
  );
   
}
