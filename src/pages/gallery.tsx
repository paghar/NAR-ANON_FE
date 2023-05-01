import { useState } from "react";

import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import ButtonUnderline from "@/components/misc/ButtonUnderline";
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
import GalleryAlbum from "@/components/GalleryAlbum";

const gallary = () => {
  const [index, setIndex] = useState(-1);
  const [planSlug, setPlanSlug] = useState("");
  const [pageLimit, setPageLimit] = useState(10);

  const { locale } = useRouter();

  const { data: plansData } = usePlans({
    locale,
    pagination: `pagination[start]=0&pagination[limit]=${pageLimit}`
  });

  const plans = plansData?.data ?? [];
  const total = plansData?.meta.pagination.total ?? 0;

  const { data: galleries } = useGalleries({
    locale,
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
    <div className="flex  mt-36 mb-4 px-8 xl:px-16 mx-auto">
      <div className="flex flex-col w-1/5  mx-4">
        {plans?.map(({ id, attributes }) => (
          <ButtonUnderline
            key={id}
            id={id + ""}
            type="button"
            addClass={`mb-8`}
            onClick={() => setPlanSlug(attributes.slug)}
          >
            {attributes.title}
          </ButtonUnderline>
        ))}
        {total > pageLimit && (
          <ButtonOutline type="button" onClick={() => setPageLimit((prev) => prev + 10)}>
            load more
          </ButtonOutline>
        )}
        {total <= pageLimit && pageLimit > 10 && (
          <ButtonOutline type="button" onClick={() => setPageLimit(10)}>
            close
          </ButtonOutline>
        )}
      </div>

      <div className="w-10/12">
        <GalleryAlbum galleries={galleries ?? []} />
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
