import Layout from "@/components/Layout/Layout";
import {useRouter} from "next/router";

const LayoutContainer = ({children}:any) => {
  
  const menuItems=["About","Gallary","Project","Event","Contact Us"];
  const router = useRouter();

  const subscribeClick = () => {
    router.push("/subscribe");
  };

  return(
    <Layout 
      menuItems={menuItems}
      subscribeClick={subscribeClick}
    >
      {children}
    </Layout>
  );
};

export default LayoutContainer;