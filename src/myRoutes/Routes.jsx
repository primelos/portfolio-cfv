import React from "react";
import Contact from "../components/Contact";
import { Route, Switch } from "react-router-dom";
import Main from "../components/main";

const Routes = props => {
  

  return (
    <div>
      <Switch>
        <Route exact path="/" render={props => <Main {...props} />} />
        <Route exact path="/contact" render ={props => <Contact {...props} />} />
      </Switch>
    </div>
  );
};

export default Routes;
