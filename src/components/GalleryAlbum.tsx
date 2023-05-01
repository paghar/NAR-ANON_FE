import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { IGallery } from "@/data/interface";
import { useState } from "react";

interface Props {
  galleries: IGallery[];
}

const GalleryAlbum: React.FC<Props> = ({ galleries }) => {
  const [index, setIndex] = useState(-1);

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
    <div >
      <PhotoAlbum
        photos={photos || []}
        layout="rows"
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={slides || []}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </div>
  );
};

export default GalleryAlbum;
