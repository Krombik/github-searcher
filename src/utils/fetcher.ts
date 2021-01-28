import { FetchRV } from "types";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "./constant";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const fetcher = {
  async get<T = {}>(url: string): Promise<FetchRV<T>> {
    try {
      return (
        await axiosInstance.get(url, {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
        })
      ).data;
    } catch (error) {
      const { data, status } = error.response as AxiosResponse;
      return { ...data, status };
    }
  },
};

export default fetcher;
