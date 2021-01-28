import { AxiosResponse } from "axios";

type ErrorsObj = {
  message: string;
};

export type FetcherFailError = ErrorsObj & Pick<AxiosResponse, "status">;
