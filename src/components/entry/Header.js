import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export const Header = ({ name }) => {
  const history = useHistory();

  const handleCrear = () => history.push("articulo/crear");

  return (
    <div className="header">
      <h1 className="header-title">Hola {name}, estos son tus articulos</h1>
      <Button
        onClick={handleCrear}
        size="lg"
        variant="success"
        className="header-button"
      >
        Crear artículo
      </Button>
    </div>
  );
};
