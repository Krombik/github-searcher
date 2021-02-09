import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import React, { memo, VFC } from "react";
import "styled-components/macro";
import SettingsDial from "containers/header/SettingsDial";
import { ThemeProps } from "types";
import Gutter, { gutterSpacing } from "./Gutter";
import MuiLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

const Header: VFC = memo(() => (
  <AppBar
    position="static"
    color="default"
    css={`
      margin-bottom: ${({ theme }: ThemeProps) =>
        theme.spacing(gutterSpacing) / 2}px;
    `}
    component={Gutter}
    //@ts-ignore
    justify="space-between"
    alignItems="center"
  >
    <Grid item>
      <MuiLink
        component={Link}
        to="/"
        color="inherit"
        underline="none"
        variant="h5"
      >
        GitHub Searcher
      </MuiLink>
    </Grid>
    <Grid item>
      <SettingsDial />
    </Grid>
  </AppBar>
));

export default Header;
