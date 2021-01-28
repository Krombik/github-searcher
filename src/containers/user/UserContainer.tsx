import React, { VFC } from "react";
import Grid from "@material-ui/core/Grid";
import FilterInput from "containers/common/FilterInput";
import { UserT } from "types/user";
import "styled-components/macro";
import UserInfo from "components/user/UserInfo";
import ReposContainer from "./ReposContainer";

type Props = { data: UserT };

const UserContainer: VFC<Props> = ({ data }) => {
  return (
    <>
      <UserInfo data={data} />
      <Grid item xs={12}>
        <FilterInput queryKey="search" label="Search" />
      </Grid>
      <ReposContainer username={data.login} />
    </>
  );
};

export default UserContainer;
