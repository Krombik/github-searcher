import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
  VFC,
} from "react";
import TextField from "@material-ui/core/TextField";
import useQueryParams from "utils/useQueryParams";
import { useHistory } from "react-router-dom";
import { parse, stringify } from "query-string";
import useDebounce from "utils/useDebounce";

type Props = {
  label: string;
  queryKey: string;
};

const FilterInput: VFC<Props> = ({ label, queryKey }) => {
  const queryParams = useQueryParams<Partial<Record<string, string>>>();

  const { replace, push, listen } = useHistory();

  const [filter, setFilter] = useState(String(queryParams[queryKey] ?? ""));

  const handleFilter = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setFilter(e.target.value),
    []
  );

  const [debouncedFilter, prevFilter, resetDebouncedFilter] = useDebounce(
    filter,
    300
  );

  useEffect(() => {
    const action = debouncedFilter.startsWith(prevFilter) ? replace : push;

    action({
      search: stringify({
        ...queryParams,
        [queryKey]: debouncedFilter || undefined,
      }),
    });
  }, [debouncedFilter, queryKey]);

  useEffect(
    () =>
      listen((location, action) => {
        if (action === "POP") {
          const value = (parse(location.search)[queryKey] as string) ?? "";

          resetDebouncedFilter(value);
          setFilter(value);
        }
      }),
    [queryKey]
  );

  return (
    <TextField fullWidth onChange={handleFilter} label={label} value={filter} />
  );
};

export default FilterInput;
