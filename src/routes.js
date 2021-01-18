import React from "react";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import MyProjects from "./components/MyProjects/MyProjects";
import Resume from "./components/Resume/Resume";
import AppBar from "./components/Navbar/appbar";

function Routes(props) {
  return (
    <>
      <AppBar history={props.history} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/my-projects" component={MyProjects} />
        <Route path="/resume" component={Resume} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default withRouter(Routes);
