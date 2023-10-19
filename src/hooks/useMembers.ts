import api from "@/services/axios";
import {IMember} from "@/data/interface";
import {useQuery} from "react-query";
import {getImageLink} from "@/utils/getImageLink";

const fetchMembers = async (locale: string): Promise<IMember[]> => {
  const res = await api.get(
    `members?populate=*&pagination[start]=0&pagination[limit]=20&locale=${locale}`
  );

  if (res.status === 200) {
    res.data.data = getImageLink(res.data.data, "image");
  }

  return res?.data.data;
};
interface MembersProps {
  locale?: string;
}
const useMembers = ({locale = "fa"}: MembersProps) => {
  return useQuery(["galleries", locale], () => fetchMembers(locale));
};

export {fetchMembers, useMembers};
