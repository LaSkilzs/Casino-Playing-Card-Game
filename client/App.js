import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./Routes";

const App = props => {
  return (
    <React.Fragment>
      <Switch>
        {routes.map(({ path, exact, component: C, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={routerProps => <C {...routerProps} {...rest} />}
          />
        ))}
      </Switch>
    </React.Fragment>
  );
};

export default App;
