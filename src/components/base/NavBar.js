import {
  Button,
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import { startLogout } from "../../actions/auth";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((state) => state.auth);
  const history = useHistory();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
        <Container fluid>
          <NavLink className="navbar-brand" to="/">
            Blog
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {/* <NavLink className='nav-link' to="/">Inicio</NavLink> */}
              {/* <NavLink className='nav-link' to="/dashboard/">Mis artículos</NavLink> */}
            </Nav>
            {!!uid ? (
              <Button onClick={handleLogout} variant="danger">
                Logout
                <IoIosLogOut style={{marginLeft: '10px'}} />
              </Button>
            ) : (
              <Button onClick={handleLogin} variant="success">
                Login
                <IoIosLogIn style={{marginLeft: '10px'}} />
              </Button>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
