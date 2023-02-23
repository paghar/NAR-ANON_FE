import React from "react";
import Facebook from "../../../public/assets/Icon/facebook.svg";
import Twitter from "../../../public/assets/Icon/twitter.svg";
import Instagram from "../../../public/assets/Icon/instagram.svg";
import ButtonPrimary from "../misc/ButtonPrimary"

const Footer = () => {
  return (
  <div className="bg-white-300 pt-44 pb-24">    
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <div className="flex flex-wrap">
          <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <h2 className="text-3xl text-black-600 font-bold mb-6">Contact us</h2>
            <p className="text-black-500 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, modi accusantium ipsum corporis quia asperiores
              dolorem nisi corrupti eveniet dolores ad maiores repellendus enim
              autem omnis fugiat perspiciatis? Ad, veritatis.
            </p>
            <p className="text-black-500 mb-2">New York, 94126, United States</p>
            <p className="text-black-500 mb-2">+ 01 234 567 89</p>
            <p className="text-black-500 mb-2">info@gmail.com</p>

            <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>          
          </div>
          <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
            <form>
              <div className="form-group mb-6">
                <input type="text" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-400
                  bg-white bg-clip-padding
                  border border-solid border-gray-400
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-400 focus:bg-white-300 focus:border-orange-500 focus:outline-none" id="exampleInput7"
                  placeholder="Name"/>
              </div>
              <div className="form-group mb-6">
                <input type="email" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-400
                  bg-white bg-clip-padding
                  border border-solid border-gray-400
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-400 focus:bg-white-300 focus:border-orange-500 focus:outline-none" id="exampleInput8"
                  placeholder="Email address"/>
              </div>
              <div className="form-group mb-6">
                <textarea className="
                  form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-400
                  bg-white bg-clip-padding
                  border border-solid border-gray-400
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-400 focus:bg-white focus:border-orange-500 focus:outline-none
                " id="exampleFormControlTextarea13" rows="3" placeholder="Message"></textarea>
                </div>             
              <ButtonPrimary>Send</ButtonPrimary>
            </form>
          </div>
        </div>
      </section>
      
    </div>

  </div>
  );
};

export default Footer;
