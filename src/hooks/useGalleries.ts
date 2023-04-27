import api from "@/services/axios";
import { IGallery } from "@/data/interface";
import { useQuery } from "react-query";

const fetchGalleries = async (
  locale: string,
  banner: boolean,
  type: string|undefined,filters:string
): Promise<IGallery[]> => {
  const res = await api.get(
    `galleries?populate=image${
      // type !== "all" ? `&filters[banner][$eq]=${banner}` : ""
      `&${filters}`
    }&locale=${locale}`
  );

  if (!!res.data.data.length) {
    res.data.data = res.data?.data.map((gallery: any) => {
      const image = gallery?.attributes?.image.data;

      gallery.attributes.image = `${process.env.PUBLIC_API_URL}${
        !!image?.length && image[0].attributes.url
      }`;

      return gallery;
    });
  }
  return res?.data.data;
};
interface GalleriesProps {
  locale: string | undefined;
  banner?: boolean;
  type?: string;
  filters:string;
}
const useGalleries = ({ locale = "de", banner = false, type ,filters}: GalleriesProps) => {
  return useQuery(["galleries",filters], () => fetchGalleries(locale, banner, type,filters));
};

export { fetchGalleries, useGalleries };
