import { startRegister } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export const Register = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [formRegisterValues, handleRegisterInputChange] = useForm({
    rName: "Nacho",
    rSurname: "da Ponte",
    rEmail1: "nacho@daponte.com",
    rEmail2: "nacho@daponte.com",
    rPassword1: "123456",
    rPassword2: "123456",
  });

  const { rName, rSurname, rEmail1, rEmail2, rPassword1, rPassword2 } =
    formRegisterValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (rPassword1 !== rPassword2) {
      return Swal.fire(
        "Error",
        "Las contraseñas deben de ser iguales",
        "error"
      );
    }

    if (rEmail1 !== rEmail2) {
      return Swal.fire("Error", "Los correos deben de ser iguales", "error");
    }

    dispatch(startRegister(rEmail1, rPassword1, rName, rSurname));
  };

  const handleGoBack = () => {
    // history.push("/");
    // window.location.reload();
  };

  return (
    <>
      <div className="auth__container">
        <div className="auth__card">
          <Form onSubmit={handleRegister}>
            <div className="auth__register">
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="rName"
                  value={rName}
                  onChange={handleRegisterInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  name="rSurname"
                  value={rSurname}
                  onChange={handleRegisterInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="rEmail1"
                  value={rEmail1}
                  onChange={handleRegisterInputChange}
                />
              </Form.Group>

              <Form.Group className=" ">
                <Form.Label>Confirmar email</Form.Label>
                <Form.Control
                  type="email"
                  name="rEmail2"
                  value={rEmail2}
                  onChange={handleRegisterInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="rPassword1"
                  value={rPassword1}
                  onChange={handleRegisterInputChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirmar contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="rPassword2"
                  value={rPassword2}
                  onChange={handleRegisterInputChange}
                />
              </Form.Group>
            </div>

            <div className="d-flex justify-content-between">
              <Button type="submit">Crear cuenta</Button>

              <Button onClick={handleGoBack} size="sm" variant="dark">
                Volver
              </Button>
            </div>
          </Form>
          <div className="auth__links">
            <NavLink className="auth__opcion" to="/forgot">
              ¿Olvidaste tu contraseña?
            </NavLink>
            <NavLink className="auth__opcion" to="/login">
              ¿Ya tenes cuenta? Inicia sesión
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
