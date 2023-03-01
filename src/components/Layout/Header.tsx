import React, {useState, useEffect} from "react";
import Link from "next/link";
import {Link as LinkScroll} from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline";
import LogoVPN from "../../../public/assets/Logo.svg";

interface IProps{
  menuItems:string[];   
}

const Header = ({menuItems}:IProps) => {  

  const [activeLink, setActiveLink] = useState("");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const renderMenuItems = ( style:string, activeLinkStyle:string, linkStyle:string ) =>{   
    return menuItems.map((item,index)=>(
      <LinkScroll
        key={`${item}${index}`}
        activeClass="active"
        to={item}
        spy={true}
        smooth={true}
        duration={1000}
        onSetActive={() => {setActiveLink(item);}}
        className={`${style} ${activeLink === item ? activeLinkStyle : linkStyle}`}     
      >
        {item}
      </LinkScroll>
    ));
  }; 

  return (
    <>
      <header 
        className={`fixed top-0 w-full  z-30 bg-white-500 transition-all${scrollActive ? " shadow-md pt-0" : " pt-4"}`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">          
            <LogoVPN className="w-12 h-12"/>
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
            {renderMenuItems(
              "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative",
              "text-orange-500 animation-active",
              "text-black-500 hover:text-orange-500 a")
            }        
          </ul>   
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <span className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                Deutsch
              </span>
            </Link>
            <span>/</span>
            <Link href="/">
              <span className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
                Farsi
              </span>
            </Link>
            <ButtonOutline>MemberShip</ButtonOutline>
          </div>

        </nav>
      </header>
      {/* Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {renderMenuItems(
              "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all",
              " border-orange-500 text-orange-500",
              "border-transparent")
            }
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
