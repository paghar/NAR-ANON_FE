import api from "@/services/axios";
import {useQuery} from "react-query";
import {getImageLink} from "@/utils/getImageLink";

const fetchMembers = async (locale: string): Promise<any> => {
  const res = await api.get(    
    `community-infos?populate=*&pagination[start]=0&pagination[limit]=20&locale=${locale}`
  );

  if (res.status === 200) {
    res.data.data = getImageLink(res.data.data, "image");
  }

  return res?.data.data;
};
interface MembersProps {
  locale?: string;
}
const useCommunityInfo = ({locale = "fa"}: MembersProps) => {
  return useQuery(["community-infos", locale], () => fetchMembers(locale));
};

export {fetchMembers, useCommunityInfo};