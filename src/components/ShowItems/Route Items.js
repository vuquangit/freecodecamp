import React from "react";
import { Switch, Route } from "react-router-dom";
import Page404 from "../../pages/404/Page404";
import Text2Link from "./Text2Link";
import Item from "./item";

// Component main
class RouteItems extends React.Component {
  render() {
    const { match, itemsList } = this.props;
    return (
      <div>
        <Switch>
          <Route
            exact
            path={match.path}
            component={() => <Item match={match} Items={itemsList} />}
          />
          {itemsList.map(item => (
            <Route
              key={item.id}
              path={`${match.path}/${Text2Link(item.title)}`}
              component={item.component}
            />
          ))}
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default RouteItems;
