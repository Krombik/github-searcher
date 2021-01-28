import { AxiosResponse } from "axios";

type ErrorsObj = {
  statusCode: number;
  message: string;
  error: string;
};

export type FetcherFailError = ErrorsObj & Pick<AxiosResponse, "status">;
