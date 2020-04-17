import { Route, Redirect, Switch } from "react-router-dom";
import React, { Fragment } from "react";

import { ToastContainer } from "react-toastify";

import Dashboards from "../../DemoPages/Dashboards";
import Widgets from "../../DemoPages/Widgets";
import Elements from "../../DemoPages/Elements";
import Components from "../../DemoPages/Components";
import Charts from "../../DemoPages/Charts";
import Forms from "../../DemoPages/Forms";
import Tables from "../../DemoPages/Tables";

const AppMain = () => {
  return (
    <Fragment>
      {/* Components */}
      <Switch>
        <Route path="/components" component={Components} />
        <Route path="/forms" component={Forms} />
        <Route path="/charts" component={Charts} />
        <Route path="/tables" component={Tables} />
        <Route path="/elements" component={Elements} />
        <Route path="/widgets" component={Widgets} />
        <Route path="/dashboards" component={Dashboards} />
        <Route
          exact
          path="/"
          render={() => <Redirect to="/dashboards/basic" />}
        />
      </Switch>

      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
