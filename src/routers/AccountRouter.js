import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Vender }      from '../components/account/Vender';
import { EnVenta }     from '../components/account/EnVenta';
import { MiPerfil }    from '../components/account/MiPerfil';
import { SideBar }    from '../components/account/SideBar';
import { Favoritos }   from '../components/account/Favoritos';
import { MediosPago }  from '../components/account/MediosPago';
import { MisCompras }  from '../components/account/MisCompras';
import { Carrito } from "../components/account/Carrito";



export const AccountRouter = () => {

  const routes = [
    {
      path: "/account/carrito",
      exact: true,
      main: () => <Carrito/>
    },
    {
      path: "/account/mi-perfil",
      exact: true,
      main: () => <MiPerfil/>
    },
    {
      path: "/account/vender",
      exact: true,
      main: () => <Vender/>
    },
    {
      path: "/account/medios-pago",
      exact: true,
      main: () => <MediosPago/>
    },
    {
      path: "/account/mis-publicaciones",
      exact: true,
      main: () => <EnVenta/>
    },
    {
      path: "/account/favoritos",
      exact: true,
      main: () => <Favoritos/>
    },
    {
      path: "/account/mis-compras",
      exact: true,
      main: () => <MisCompras/>
    },

  ];
  

  return (
    
    <Router>
      <div className="account">
        
        <SideBar/>
        
        <div className="account__main-aside" >
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
        </div>
    </div>
    </Router>
  )
}
