import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Login } from "../components/auth/Login";
import { Forgot } from "../components/auth/Forgot";
import { Register } from "../components/auth/Register";

import { startChecking } from "../actions/auth";

import { Home } from "../components/Home";
import { NavBar } from "../components/base/NavBar";
import { DashboardRouter } from "../components/entry/DashboardRouter.js";
import { EntryFullScreen } from "../components/entry/EntryFullScreen";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) return <h2>Espere...</h2>;

  return (
    <Router>
      <NavBar />
      <div className="center__body">
        <Switch>

          <Route exact path="/recovery" component={Forgot} />
          <Route exact path="/register" component={Register} />


          {/* <Route exact path="/confirm" component={Confirm} /> */}
          <Route exact path="/entry/:id" component={EntryFullScreen} />

          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/*"
            component={DashboardRouter}
            isAuthenticated={!!uid}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
    // <BrowserRouter>
    //     <Routes>

    //       <Route element={<Layout/>}>
    //         <Route path="/" element={<Home/>}/>
    //         <Route path="login" element={<Login />} />
    //         <Route path="register" element={<Register />} />
    //         <Route path="forgot" element={<Forgot />} />

    //         <Route path="/dashboard/*" element={
    //           <PrivateRoute isAuth={!!uid}>
    //             <DashboardRouter />
    //           </PrivateRoute>
    //         }/>
    //       </Route>

    //     </Routes>
    // </BrowserRouter>
  );
};
