import Footer from "./Footer";
import Header from "./Header";

interface IProps{
  menuItems:string[] 
  children:any
  subscribeClick:()=>void
}

const Layout = ({menuItems,children,subscribeClick}: IProps) => {
  return (
    <>
      <Header menuItems={menuItems} subscribeClick={subscribeClick} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
