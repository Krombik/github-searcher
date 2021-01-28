import React, { VFC } from "react";
import Grid from "@material-ui/core/Grid";
import { UserT } from "types/user";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import "styled-components/macro";
import { Link } from "@material-ui/core";

type Props = { data: UserT };

const UserInfo: VFC<Props> = ({ data }) => (
  <>
    <Grid item container spacing={6} alignItems="center">
      <Grid item>
        <Avatar
          src={data.avatar_url}
          css={`
            height: 200px;
            width: 200px;
          `}
        >
          {data.login}
        </Avatar>
      </Grid>
      <Grid item>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <Typography>UserName: {data.login}</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Email:{" "}
              {data.email && (
                <Link
                  underline="always"
                  color="inherit"
                  href={`mailto:${data.email}`}
                >
                  {data.email}
                </Link>
              )}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>Location: {data.location}</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Join date: {new Date(data.created_at).toDateString()}
            </Typography>
          </Grid>
          <Grid item>
            <Typography>{data.followers} Followers</Typography>
          </Grid>
          <Grid item>
            <Typography>Following {data.following}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    {data.bio && (
      <Grid item xs={12}>
        <Typography>{data.bio}</Typography>
      </Grid>
    )}
  </>
);

export default UserInfo;
