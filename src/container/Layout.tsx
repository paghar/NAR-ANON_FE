import Layout from "@/components/Layout/Layout";

const LayoutContainer = ({children}:any) => {
  
  const menuItems=["About","Gallary","Project","Event","Contact Us"];

  return(
    <Layout menuItems={menuItems}>
      {children}
    </Layout>
  );
};

export default LayoutContainer;