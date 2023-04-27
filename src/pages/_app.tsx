import { useEffect } from "react";
import { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import { QueryClientProvider, QueryClient } from "react-query";

import Layout from "../container/Layout";
import SeoHead from "@/components/SeoHead";

import "@/styles/globals.css";
import "@/styles/slick.css";

import "react-phone-number-input/style.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  const {
    t,
    i18n: { dir, language }
  } = useTranslation("common");

  useEffect(() => {
    document.dir = dir();
  }, [language]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SeoHead title={t("site-name")} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default appWithTranslation(App);
