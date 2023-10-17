import api from "@/services/axios";
import {IGallery} from "@/data/interface";
import {useQuery} from "react-query";
import {getImageLink} from "@/utils/getImageLink";

const fetchGalleries = async (
  locale: string,
  filters: string,
  pagination: string | undefined
): Promise<IGallery[]> => {
  const res = await api.get(
    `galleries?populate=image${`&${pagination}`}${`&${filters}`}&locale=${locale}`
  );

  
  if (res.status === 200) {
    res.data.data = getImageLink(res.data.data,"image");
  }

  return res?.data.data;
};
interface GalleriesProps {
  locale?: string;
  filters: string;
  pagination?: string;
}
const useGalleries = ({locale = "en", filters, pagination}: GalleriesProps) => {
  return useQuery(["galleries", filters, pagination, locale], () =>
    fetchGalleries(locale, filters, pagination)
  );
};

export {fetchGalleries, useGalleries};
