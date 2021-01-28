import React, { VFC } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import Header from "components/common/Header";

const AppRouter: VFC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default AppRouter;
