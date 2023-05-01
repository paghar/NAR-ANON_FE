import { IPlan } from "@/data/interface";
import api from "@/services/axios";
import { getImageLink } from "@/utils/getImageLink";
import { useQuery } from "react-query";

interface PlansResponse {
  data: IPlan[] ;
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
  pagination: string,
  slug: string | undefined
): Promise<PlansResponse> => {
  const res = await api.get(
    `plans${slug ? "/" + slug : ""}?populate=thumbnail&${pagination}${
      filters ? "&" + filters : ""
    }&locale=${locale}`
  );

  if (res.statusText === "OK" && !slug) {
    res.data.data = getImageLink(res.data.data, "thumbnail");
  }

  if (res.statusText === "OK" && slug) {
    const [data] = getImageLink([res.data.data], "thumbnail");
    res.data.data = data;
  }

  return res?.data;
};

interface PlansProps {
  locale?: string;
  filters?: string;
  pagination: string;
  enabled?: boolean;
  slug?: string;
}
const usePlans = ({ locale = "de", filters, pagination, enabled = true, slug }: PlansProps) => {
  return useQuery(
    ["plans", filters, pagination, locale, slug],
    () => fetchPlans(locale, filters, pagination, slug),
    { enabled }
  );
};

export { fetchPlans, usePlans };
