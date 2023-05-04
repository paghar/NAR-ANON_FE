import React from "react";

interface IProps{
  date:string,
  thumbnail:string,
  title:string,
  description:string,
  btnText:string
  readMore:()=>void
}

const Card = ({date,thumbnail,title,description,btnText,readMore}:IProps) => {
  return(
    <article className="flex bg-white transition hover:shadow-xl h-full">

      <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
          dateTime="2022-10-10"
          className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
        >
          <span>{}date</span>
          <span className="w-px flex-1 bg-gray-900/10"></span>
          <span>{date}</span>
        </time>
      </div>

      <div className="hidden sm:block sm:basis-56">
        <img
          alt="image"
          src={thumbnail}
          className="aspect-square h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div className="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
          <a href="#">
            <h3 className="font-bold uppercase text-gray-900 line-clamp-2 h-12">
              {title}
            </h3>
          </a>

          <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-4">
            {description}
          </p>
        </div>

        <div className="sm:flex sm:items-end sm:justify-end">
          <button
            onClick={readMore}
            className="block bg-orange-500 px-5 py-3 text-center text-xs font-bold uppercase text-white-500 transition hover:bg-orange-500"
          >
            {btnText}
          </button>
        </div>

      </div>
    </article>

  );
};

export default Card;