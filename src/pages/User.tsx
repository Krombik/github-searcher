import React, { memo, VFC } from "react";
import Gutter from "components/common/Gutter";
import Grid from "@material-ui/core/Grid";
import { RouteComponentProps } from "react-router-dom";
import useSWR from "swr";
import { FetchRV } from "types";
import APIPaths from "api/apiAddresses";
import { UserT } from "types/user";
import fetcher from "utils/fetcher";
import Loader from "containers/common/Loader";
import UserContainer from "containers/user/UserContainer";

const User: VFC<RouteComponentProps<{ user: string }>> = memo(
  ({
    match: {
      params: { user },
    },
  }) => {
    const { data } = useSWR<FetchRV<UserT>>(
      `${APIPaths.USERS}/${user}`,
      fetcher.get
    );

    return (
      <Gutter>
        <Grid container spacing={3}>
          <Loader component={UserContainer} data={data} />
        </Grid>
      </Gutter>
    );
  }
);

export default User;
