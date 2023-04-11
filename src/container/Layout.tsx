import Layout from "@/components/Layout/Layout";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";

const LayoutContainer = ({children}: any) => {
  const {t} = useTranslation("common");

  const menuItems = [
    {text:t("navbar.about"),hrefText:"About"},
    {text:t("navbar.gallery"),hrefText:"Gallery"},
    {text:t("navbar.project"),hrefText:"Project"},
    {text: t("navbar.event"),hrefText:"Event"},
    {text: t("navbar.contact-us"),hrefText:"Contact"},  
  ];

  const router = useRouter();

  const subscribeClick = () => {
    router.push("/subscribe");
  };

  return (
    <Layout menuItems={menuItems} subscribeClick={subscribeClick}>
      {children}
    </Layout>
  );
};

export default LayoutContainer;
