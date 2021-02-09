import React, { VFC } from "react";
import Grid from "@material-ui/core/Grid";
import "styled-components/macro";
import Link from "@material-ui/core/Link";
import { RepoT } from "types/repo";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { ThemeProps } from "types";

type Props = {
  data: RepoT[];
};

const Repos: VFC<Props> = ({ data }) => {
  return (
    <Grid container spacing={3}>
      {data.map((item, index) => (
        <Grid item key={index} xs={12} md={6}>
          <Paper
            css={`
              padding: ${({ theme }: ThemeProps) => theme.spacing(3) / 2}px;
              height: 100%;
            `}
          >
            <Grid
              container
              spacing={3}
              alignItems="center"
              justify="space-between"
            >
              <Grid item xs={12}>
                <Link
                  href={item.html_url}
                  color="inherit"
                  target="_blank"
                  variant="h4"
                >
                  {item.name}
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Language: <b>{item.language}</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Description: <b>{item.description}</b>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Repos;
