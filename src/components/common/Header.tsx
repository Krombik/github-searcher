import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import React, { memo, VFC } from "react";
import "styled-components/macro";
import SettingsDial from "containers/header/SettingsDial";
import { ThemeProps } from "types";
import { gutterSpacing } from "./Gutter";

const Header: VFC = memo(() => (
  <AppBar
    position="static"
    color="default"
    css={`
      margin-bottom: ${({ theme }: ThemeProps) =>
        theme.spacing(gutterSpacing) / 2}px;
    `}
  >
    <Grid
      container
      justify="space-between"
      alignItems="center"
      css={`
        max-width: ${({ theme }: ThemeProps) =>
          theme.breakpoints.width("lg")}px;
      `}
    >
      <Grid item>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <SettingsDial />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </AppBar>
));

export default Header;
