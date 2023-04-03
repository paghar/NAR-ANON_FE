import { IEventItem } from "@/data/interface";
import api from "./axios";

export const getEvents = async (): Promise<IEventItem[]> => {
  const res = await api.get("plans?populate=thumbnail&filters[type][$eq]=event");
  return res?.data.data;
};
