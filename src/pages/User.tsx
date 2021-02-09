import React, { memo, VFC } from "react";
import { RouteComponentProps } from "react-router-dom";
import ReposContainer from "containers/user/ReposContainer";

const User: VFC<RouteComponentProps<{ user: string }>> = memo(
  ({
    match: {
      params: { user },
    },
  }) => {
    return <ReposContainer username={user} />;
  }
);

export default User;
