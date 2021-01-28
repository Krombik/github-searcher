import React, { memo, VFC } from "react";
import useQueryParams from "utils/useQueryParams";
import { SearchQueryType } from "types/home";
import Gutter from "components/common/Gutter";
import Grid from "@material-ui/core/Grid";
import FilterInput from "containers/common/FilterInput";
import UsersContainer from "containers/home/UsersContainer";

const Home: VFC = memo(() => {
  const { search } = useQueryParams<SearchQueryType>();
  return (
    <Gutter>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <FilterInput queryKey="search" label="Search" />
        </Grid>
        {search && <UsersContainer search={search} />}
      </Grid>
    </Gutter>
  );
});

export default Home;
