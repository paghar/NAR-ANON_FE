import Footer from "./Footer";
import Header from "./Header";
import {IMenuItem} from "../../data/interface";

interface IProps{
  menuItems:IMenuItem[] 
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
