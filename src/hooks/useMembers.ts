import api from "@/services/axios";
import { IGallery, IMember } from "@/data/interface";
import { useQuery } from "react-query";
import { getImageLink } from "@/utils/getImageLink";

const fetchGalleries = async (locale: string): Promise<IMember[]> => {
  const res = await api.get(
    `members?populate=*&pagination[start]=0&pagination[limit]=20&locale=${locale}`
  );

  if (res.statusText === "OK") {
    res.data.data = getImageLink(res.data.data,'image')
  }
  
  return res?.data.data;
};
interface MembersProps {
  locale?: string;
}
const useMembers = ({ locale = "de" }: MembersProps) => {
  return useQuery(["galleries", locale], () => fetchGalleries(locale));
};

export { fetchGalleries, useMembers };
