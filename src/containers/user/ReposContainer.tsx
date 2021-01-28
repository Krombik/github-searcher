import React, { useEffect, useRef, VFC } from "react";
import { FetchRV } from "types";
import fetcher from "utils/fetcher";
import { useSWRInfinite } from "swr";
import { State } from "types";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { stringifyUrl } from "query-string";
import { SearchQueryType } from "types/home";
import Loader from "containers/common/Loader";
import APIPaths from "api/apiAddresses";
import { Button, Grid } from "@material-ui/core";
import Spinner from "components/common/Spinner";
import useQueryParams from "utils/useQueryParams";
import { RepoData } from "types/repo";
import Repos from "./Repos";

const selectData = createSelector(
  (state: State) => state.common.offset,
  (offset) => ({ offset })
);

type Props = { username: string };

const ReposContainer: VFC<Props> = ({ username }) => {
  const { offset } = useSelector(selectData);

  const prevData = useRef<FetchRV<RepoData>[]>();

  const { search } = useQueryParams<SearchQueryType>();

  const { data, size, setSize } = useSWRInfinite<FetchRV<RepoData>>(
    (page) =>
      stringifyUrl(
        {
          url: APIPaths.USER_REPOSITORIES_SEARCH,
          query: {
            q: `${search ? `${search} in:name ` : ""}user:${username}`,
            page,
            per_page: offset,
          },
        },
        { skipEmptyString: true }
      ),
    fetcher.get
  );

  useEffect(() => {
    if (data) prevData.current = data;
  }, [data]);

  const repos = data || prevData.current;

  return (
    <>
      {repos?.map((item, index) => (
        <Loader key={index} component={Repos} data={item} />
      ))}
      {repos && repos.length < size && <Spinner />}
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

export default ReposContainer;
