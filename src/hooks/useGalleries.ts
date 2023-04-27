import api from "@/services/axios";
import { IGallery } from "@/data/interface";
import { useQuery } from "react-query";

const fetchGalleries = async (locale: string, filters: string,pagination:string|undefined): Promise<IGallery[]> => {
  const res = await api.get(`galleries?populate=image${`&${pagination}`}${`&${filters}`}&locale=${locale}`);

  if (res.statusText === "OK") {
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
  locale?: string ;
  filters: string;
  pagination?:string;
}
const useGalleries = ({ locale = "de", filters ,pagination}: GalleriesProps) => {
  return useQuery(["galleries", filters,pagination,locale], () => fetchGalleries(locale, filters,pagination));
};

export { fetchGalleries, useGalleries };
