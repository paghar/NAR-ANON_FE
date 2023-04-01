import { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";

import Layout from "../container/Layout";
import SeoHead from "@/components/SeoHead";

import "@/styles/globals.css";
import "@/styles/slick.css";
import { useEffect } from "react";

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
      <SeoHead title={t("site-name")} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);
