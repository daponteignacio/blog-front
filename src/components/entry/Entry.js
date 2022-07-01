import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteEntry, getOneEntry } from "../../actions/entry";

export const Entry = ({ elements }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleVerMas = () =>
    history.push(`/articulo/${elements._id}`);

  const handleEditar = () => {
    dispatch(getOneEntry(elements._id));
    history.push(`/articulo/editar/${elements._id}`);
  };

  const handleEliminar = () => dispatch(deleteEntry(elements._id));

  return (
    <article className="entry-container">
      <div className="entry-text">
        <h3 className="entry-title">{elements.title}</h3>
        <p className="entry-desc">{elements.description}</p>
        <p className="entry-date">{elements.createdAt}</p>
      </div>

      <div className="entry-buttons">
        <Button onClick={handleVerMas} variant="info">
          Ver más
        </Button>{" "}
        <Button onClick={handleEditar} variant="warning">
          Editar
        </Button>{" "}
        <Button onClick={handleEliminar} variant="danger">
          Eliminar
        </Button>{" "}
      </div>
    </article>
  );
};
