import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const Forgot = () => {
  return (
    <div className="auth__container">
      <div className="auth__card">
        <Form>
          {/* onSubmit={handleLogin} */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="lEmail"
              // value={lEmail}
              // onChange={handleLoginInputChange}
            />
            <Form.Text>
              Te vamos a enviar un correo con los pasos para recuperar tu cuenta
            </Form.Text>
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button type="submit">Enviar instrucciones</Button>
          </div>
        </Form>
        <div className="auth__links">
          <NavLink className="auth__opcion" to="/login">
            ¿Ya tenes cuenta? Inicia sesión
          </NavLink>
          <NavLink className="auth__opcion" to="/register">
            ¿Todavía no tenes cuenta? Crea una.
          </NavLink>
        </div>
      </div>
    </div>
  );
};
