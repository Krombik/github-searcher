import React, { useEffect, useRef, VFC } from "react";
import { FetchRV } from "types";
import fetcher from "utils/fetcher";
import { useSWRInfinite } from "swr";
import { State } from "types";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { stringifyUrl } from "query-string";
import { HomeData, SearchQueryType } from "types/home";
import Loader from "containers/common/Loader";
import Users from "containers/home/Users";
import APIPaths from "api/apiAddresses";
import { Button, Grid } from "@material-ui/core";
import Spinner from "components/common/Spinner";

const selectData = createSelector(
  (state: State) => state.common.offset,
  (offset) => ({ offset })
);

type Props = SearchQueryType;

const UsersContainer: VFC<Props> = ({ search }) => {
  const { offset } = useSelector(selectData);

  const prevData = useRef<FetchRV<HomeData>[]>();

  const { data, size, setSize } = useSWRInfinite<FetchRV<HomeData>>(
    (page) =>
      stringifyUrl(
        {
          url: APIPaths.USER_SEARCH,
          query: { q: search, page, per_page: offset },
        },
        { skipEmptyString: true }
      ),
    fetcher.get
  );

  useEffect(() => {
    if (data) prevData.current = data;
  }, [data]);

  const users = data || prevData.current;

  return (
    <>
      {users?.map((item, index) => (
        <Loader key={index} component={Users} data={item} />
      ))}
      {users && users.length < size && <Spinner />}
      {data && (
        <Grid item container justify="center">
          <Button
            variant="contained"
            color="primary"
            disabled={
              data.length !== size ||
              data.length * offset > (data[0].total_count ?? 0)
            }
            onClick={() => setSize((size) => size + 1)}
          >
            Load more
          </Button>
        </Grid>
      )}
    </>
  );
};

export default UsersContainer;
