import React, { useCallback, useEffect, useRef, useState, VFC } from "react";
import TextField from "@material-ui/core/TextField";
import useQueryParams from "utils/useQueryParams";
import { Link, useHistory } from "react-router-dom";
import { stringify, stringifyUrl } from "query-string";
import useDebounce from "utils/useDebounce";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useSWRInfinite } from "swr";
import { FetchRV } from "types";
import { UserShortT } from "types/user";
import { HomeData } from "types/home";
import fetcher from "utils/fetcher";
import APIPaths from "api/apiAddresses";
import debounce from "lodash.debounce";
import SearchListbox, {
  SearchListboxProps,
} from "containers/common/SearchListbox";
import { SEARCH_VARIANTS_COUNT } from "utils/constant";
import MuiLink from "@material-ui/core/Link";

const UserSearchInput: VFC = () => {
  const queryParams = useQueryParams<{ q?: string }>();

  const currFilter = queryParams.q ?? "";

  const { replace, push, action } = useHistory();

  const [filter, setFilter] = useState(currFilter);

  useDebounce(
    filter,
    (newFilter) => {
      if (newFilter !== currFilter) {
        const func =
          currFilter && newFilter.startsWith(currFilter) ? replace : push;

        func({
          search: stringify({
            ...queryParams,
            q: newFilter || undefined,
          }),
        });
      }
    },
    300
  );

  useEffect(() => {
    if (action === "POP" && currFilter !== filter) {
      setFilter(currFilter);
    }
  }, [currFilter]);

  const { data, size, setSize } = useSWRInfinite<FetchRV<HomeData>>(
    (page) =>
      currFilter
        ? stringifyUrl(
            {
              url: APIPaths.USER_SEARCH,
              query: { q: currFilter, page, per_page: SEARCH_VARIANTS_COUNT },
            },
            { skipEmptyString: true }
          )
        : null,
    fetcher.get
  );

  const loadMoreAvailable =
    data &&
    data.length === size &&
    (data[size - 1].total_count ?? 0) > size * SEARCH_VARIANTS_COUNT;

  const loadMore = useCallback(
    debounce(() => {
      setSize((size) => size + 1);
    }, 500),
    []
  );

  const prevData = useRef<FetchRV<HomeData>[]>();

  useEffect(() => {
    if (data) prevData.current = data;
  }, [data]);

  const users = data || prevData.current;

  return (
    <Autocomplete
      options={
        currFilter && users
          ? users.reduce<UserShortT[]>(
              (acc, item) => (item.items ? [...acc, ...item.items] : acc),
              []
            )
          : []
      }
      ListboxComponent={SearchListbox as any}
      ListboxProps={{ loadMore, loadMoreAvailable } as SearchListboxProps}
      loading={filter ? !users : false}
      getOptionLabel={(option) => option.login}
      inputValue={filter}
      onChange={(_, option) =>
        setFilter(typeof option === "string" ? option : option?.login ?? "")
      }
      onInputChange={(e, value) => {
        if (e) setFilter(value);
      }}
      renderOption={(option) => (
        <MuiLink
          component={Link}
          to={`/${option.login}`}
          color="inherit"
          underline="always"
        >
          {option.login}
        </MuiLink>
      )}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth
          variant="outlined"
          label="User search"
        />
      )}
    />
  );
};

export default UserSearchInput;
