import React, { memo, VFC } from "react";
import Typography from "@material-ui/core/Typography";

const Home: VFC = memo(() => {
  return (
    <Typography variant="h3" align="center">
      Welcome!
    </Typography>
  );
});

export default Home;
