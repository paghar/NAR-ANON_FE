import { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import ArrowBack from "../../../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../../../public/assets/Icon/eva_arrow-next-fill.svg";
import ButtonOutline from "../misc/ButtonOutline";
import { IEventItem } from "@/data/interface";
import { settings } from "../../data/constants/sliderSettings";

interface IProps {
  eventItems: IEventItem[];
}

const EventSlider = ({ eventItems }: IProps) => {
  const [sliderRef, setSliderRef] = useState<any>();

  return (
    <>
      <Slider {...settings} arrows={false} ref={setSliderRef} className="flex items-stretch justify-items-stretch">
        {eventItems?.map((item: any, index: number) => (
          <div className="px-3 flex items-stretch" key={index}>
            <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
              <Image className="items-center" src={item.image} height={200} width={200} alt="Icon People" />
              <h1 className="mt-5 text-left">{item.title}</h1>
              <p className="mt-5 text-left">“{item.description}”.</p>
              <ButtonOutline type="button" onClick={() => null}>
                Read More
              </ButtonOutline>
            </div>
          </div>
        ))}
      </Slider>

      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white
             border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all
             text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white
             border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSlider;
