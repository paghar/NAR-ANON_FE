import { useEffect } from "react";
import { AppProps } from "next/app";
import { appWithTranslation, useTranslation } from "next-i18next";
import { QueryClientProvider, QueryClient } from "react-query";
import { Toaster } from "react-hot-toast";

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
          <Toaster
            containerStyle={{ bottom: "12%" }}
            toastOptions={{
              style: {
                width: "100%",
                boxShadow:
                  "0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12),0px 2px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: "8px",
              },
            }}
          />
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default appWithTranslation(App);
