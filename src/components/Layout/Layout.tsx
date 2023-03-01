import Footer from "./Footer";
import Header from "./Header";

interface IProps{
  menuItems:string[];  
  children:any
}

const Layout = ({menuItems,children}: IProps) => {
  return (
    <>
      <Header menuItems={menuItems} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
