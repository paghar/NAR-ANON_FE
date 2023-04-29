import { IPlan } from "@/data/interface";
import api from "@/services/axios";
import { getImageLink } from "@/utils/getImageLink";
import { useQuery } from "react-query";

interface PlansResponse {
  data: IPlan[];
  meta: {
    pagination: {
      start: number;
      limit: number;
      total: number;
    };
  };
}

const fetchPlans = async (
  locale: string,
  filters: string | undefined,
  pagination: string
): Promise<PlansResponse> => {
  const res = await api.get(
    `plans?populate=thumbnail&${pagination}${filters ? `&${filters}` : ""}&locale=${locale}`
  );

  if (res.statusText === "OK") {
    res.data.data =getImageLink(res.data.data,'thumbnail')
  }

  return res?.data;
};

interface PlansProps {
  locale?: string ;
  filters?: string;
  pagination: string;
  enabled?:boolean;
}
const usePlans = ({ locale = "de", filters, pagination ,enabled=true}: PlansProps) => {
  return useQuery(["plans",filters, pagination,locale], () => fetchPlans(locale, filters, pagination),{enabled});
};

export { fetchPlans, usePlans };
