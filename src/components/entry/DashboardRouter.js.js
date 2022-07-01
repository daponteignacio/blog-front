import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { FormEntry } from "./FormEntry";
import { EntryFullScreen } from "./EntryFullScreen";
import { Dashboard } from "./Dashboard";

export const DashboardRouter = () => {
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Dashboard />,
    },
    {
      path: "/articulo/crear",
      exact: true,
      main: () => <FormEntry edit={false} />,
    },
    {
      path: "/articulo/editar/:id",
      exact: true,
      main: () => <FormEntry edit={true} />,
    },
    {
      path: "/articulo/:id",
      exact: true,
      main: () => <EntryFullScreen />,
    },
  ];

  return (
    <Router>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
    </Router>
  );
};
