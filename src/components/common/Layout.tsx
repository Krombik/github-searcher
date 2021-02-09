import React, { FC } from "react";
import "styled-components/macro";
import Alert from "containers/common/Alert";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import UserSearchInput from "containers/home/UserSearchInput";
import Gutter from "./Gutter";

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
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <UserSearchInput />
          </Grid>
          <Grid item xs={12} md={8}>
            {children}
          </Grid>
        </Grid>
      </Gutter>
    </Grid>
    <Alert />
  </>
);

export default Layout;
