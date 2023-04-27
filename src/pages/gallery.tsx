import  { useState } from "react";

import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ButtonOutline from "@/components/misc/ButtonOutline";
import { usePlans } from "@/hooks/usePlans";
import { useGalleries } from "@/hooks/useGalleries";
import { IGallery } from "@/data/interface";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

const gallary = () => {
  const [index, setIndex] = useState(-1);
  const [planSlug, setPlanSlug] = useState("");
  const [pageLimit, setPageLimit] = useState(10);

  const { locale } = useRouter();

  const { data: plansData } = usePlans({
    locale,
    type: "all",
    pagination: `pagination[start]=0&pagination[limit]=${pageLimit}`
  });
  
  const plans = plansData?.data ?? [];
  const total = plansData?.meta.pagination.total ?? 0;

  const { data: galleries } = useGalleries({
    locale,
    type: "all",
    filters: `filters\[plan\][slug][$contains]=${planSlug}`
  });

  const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

  const photos = galleries?.map(({ id, attributes }: IGallery) => {
    const width = breakpoints[0];
    const height = (+attributes.height / +attributes.width) * width;

    return {
      src: attributes.image,
      width,
      height,
      images: breakpoints.map((breakpoint) => {
        const height = Math.round((+attributes.height / +attributes.width) * breakpoint);
        return {
          src: attributes.image,
          width: breakpoint,
          height
        };
      })
    };
  });

  const slides = photos?.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images?.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height
    }))
  }));

  return (
    <div className="flex max-w-screen-xl mt-36 mb-4 px-8 xl:px-16 mx-auto">
      <div className="flex flex-col w-auto mx-4">
          {plans?.map(({ id, attributes }) => (
            <ButtonOutline
              key={id}
              id={id + ""}
              type="button"
              addClass={`mb-2 text-[14px] !px-6  line-clamp-1 ${
                attributes.slug === planSlug ? " !bg-orange-500 text-white-500 " : ""
              }`}
              onClick={() => setPlanSlug(attributes.slug)}
            >
              {attributes.title}
            </ButtonOutline>
          ))}
        {total > pageLimit && (
          <button type="button" onClick={() => setPageLimit((prev) => prev + 10)}>
            load more
          </button>
        )}
        {total <= pageLimit && pageLimit > 10 && (
          <button type="button" onClick={() => setPageLimit(10)}>
            close
          </button>
        )}
      </div>

      <div className="w-10/12">
        <PhotoAlbum
          photos={photos || []}
          layout="rows"
          targetRowHeight={150}
          onClick={({ index }) => setIndex(index)}
        />
        <Lightbox
          slides={slides||[]}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
      </div>
    </div>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "de", ["common"]))
    }
  };
}

export default gallary;
