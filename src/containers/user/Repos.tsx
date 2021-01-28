import React, { VFC } from "react";
import Grid from "@material-ui/core/Grid";
import "styled-components/macro";
import Link from "@material-ui/core/Link";
import { RepoData } from "types/repo";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import StarIcon from "@material-ui/icons/Star";
import Tooltip from "@material-ui/core/Tooltip";

type Props = {
  data: RepoData;
};

const Repos: VFC<Props> = ({ data }) => {
  return (
    <>
      {data.items.map((item, index) => (
        <Grid item key={index} xs={12}>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
              <Link
                href={item.html_url}
                color="inherit"
                underline="always"
                target="_blank"
              >
                {item.name}
              </Link>
            </Grid>
            <Grid item>
              <Grid container xs spacing={2} justify="flex-end">
                <Grid
                  item
                  container
                  alignItems="center"
                  spacing={2}
                  justify="flex-end"
                >
                  <Grid item>{item.forks}</Grid>
                  <Tooltip title="Forks">
                    <AccountTreeIcon />
                  </Tooltip>
                </Grid>
                <Grid
                  item
                  container
                  alignItems="center"
                  spacing={2}
                  justify="flex-end"
                >
                  <Grid item>{item.stargazers_count}</Grid>
                  <Tooltip title="Stars">
                    <StarIcon />
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Repos;
