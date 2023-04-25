import api from "../services/axios";
import { IGallery } from "@/data/interface";
import { useQuery } from "react-query";

const fetchGalleries = async (locale: string, banner: boolean): Promise<IGallery[]> => {
  const res = await api.get(
    `galleries?populate=image&filters[banner][$eq]=${banner}&locale=${locale}`
  );
  
  if (!!res.data.data.length) {
  console.log('len',res.data.data.length);
  console.log('wtf');
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

const useGalleries = ({ locale = "de", banner = false }) => {
  return useQuery(["galleries"], () => fetchGalleries(locale, banner));
};

export { fetchGalleries, useGalleries };
