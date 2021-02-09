import React, { memo, VFC } from "react";
import { State } from "types";
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import MuiLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

const selectData = createSelector(
  (state: State) => state.search.history,
  (history) => ({ history })
);

const UserSearchHistory: VFC = memo(() => {
  const { history } = useSelector(selectData);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        Your browsing history:
      </Grid>
      {history.map((item, index) => (
        <Grid key={index} item xs={12}>
          <MuiLink
            component={Link}
            to={`/${item}`}
            color="inherit"
            underline="always"
          >
            {item}
          </MuiLink>
        </Grid>
      ))}
    </Grid>
  );
});

export default UserSearchHistory;
