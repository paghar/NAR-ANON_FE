import { IPlan } from "@/data/interface";
import api from "@/services/axios";
import { useQuery } from "react-query";

interface PlansResponse{
  data:IPlan[];
  meta:{
    pagination:{
      start:number;
      limit:number;
      total:number;
    }
  }
}

const fetchPlans = async (locale: string, type: string,pagination:string): Promise<PlansResponse> => {
  const res = await api.get(
    `plans?populate=thumbnail&${pagination}${
      type !== "all" ? `&filters[type][$eq]=${type}` : ""
    }&locale=${locale}`
  );
  
  return res?.data;
};

interface PlansProps {
  locale: string | undefined;
  type: string;
  pagination: string;
}
const usePlans = ({ locale = "de", type ,pagination}: PlansProps) => {
  return useQuery(["plans",pagination], () => fetchPlans(locale, type,pagination));
};

export { fetchPlans, usePlans };
