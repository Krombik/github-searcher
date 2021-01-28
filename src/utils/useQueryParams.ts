import { parse } from "query-string";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useQueryParams = <
  T extends { [key: string]: number | string | string[] | undefined } = any
>() => {
  const { search } = useLocation();
  const params = useMemo(() => parse(search, { parseNumbers: true }), [search]);
  return params as T;
};

export default useQueryParams;
