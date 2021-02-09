import React, { memo, useEffect, VFC } from "react";
import { RouteComponentProps } from "react-router-dom";
import ReposContainer from "containers/repos/ReposContainer";
import { useDispatch } from "react-redux";
import { ThunkDispatcher } from "types";
import { updateHistory } from "redux/search/actions";

const User: VFC<RouteComponentProps<{ user: string }>> = memo(
  ({
    match: {
      params: { user },
    },
  }) => {
    const dispatch = useDispatch<ThunkDispatcher>();

    useEffect(() => {
      dispatch(updateHistory(user));
    }, [user]);

    return <ReposContainer username={user} />;
  }
);

export default User;
