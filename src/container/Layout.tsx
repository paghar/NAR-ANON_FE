import Layout from "@/components/Layout/Layout";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const LayoutContainer = ({ children }: any) => {
  const { t } = useTranslation("common");

  const menuItems = [
    t("navbar.about"),
    t("navbar.gallery"),
    t("navbar.project"),
    t("navbar.event"),
    t("navbar.contact-us")
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
