import React, { VFC } from "react";
import Grid from "@material-ui/core/Grid";
import { HomeData } from "types/home";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import "styled-components/macro";

type Props = {
  data: HomeData;
};

const Users: VFC<Props> = ({ data }) => {
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
              <Avatar
                src={item.avatar_url}
                css={`
                  height: 75px;
                  width: 75px;
                `}
              >
                {item.login}
              </Avatar>
            </Grid>
            <Grid item>
              <Typography variant="body1">{item.login}</Typography>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Users;
