import {IPlan} from "@/data/interface";
import api from "./axios";

export const getPlans = async (locale = "de", type: string): Promise<IPlan[]> => {
  const res = await api.get(`plans?populate=thumbnail&filters[type][$eq]=${type}&locale=${locale}`);
  return res?.data.data;
};

