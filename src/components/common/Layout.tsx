import React, { FC } from "react";
import "styled-components/macro";
import Alert from "containers/common/Alert";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import UserSearchInput from "containers/user/UserSearchInput";
import Gutter from "./Gutter";
import UserSearchHistory from "containers/user/UserSearchHistory";

const Layout: FC = ({ children }) => (
  <>
    <Grid
      container
      spacing={3}
      css={`
        margin: 0;
        width: 100%;
        min-height: 100vh;
        height: 100%;
      `}
      direction="column"
    >
      <Header />
      <Gutter>
        <Grid item xs={12} md={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <UserSearchInput />
            </Grid>
            <Grid item xs={12}>
              <UserSearchHistory />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={9}>
          {children}
        </Grid>
      </Gutter>
    </Grid>
    <Alert />
  </>
);

export default Layout;
