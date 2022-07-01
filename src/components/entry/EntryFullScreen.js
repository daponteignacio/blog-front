import { Interweave } from "interweave";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getOneEntry } from "../../actions/entry";

export const EntryFullScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { oneEntry } = useSelector((state) => state.entry);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneEntry(id));
  }, [dispatch, id]);

  const handleVolver = () => history.push("/dashboard");

  return (
    <div className="container entry-fs__container">
      <div className="entry-fs__header">
        <div className="entry-fs__header--inner">
          <h3 className="entry-fs__title">{oneEntry.title}</h3>
          <p className="entry-fs__date">{oneEntry.createdAt}</p>
        </div>
        <Button onClick={handleVolver}>Volver</Button>
      </div>
      <p className="entry-fs__desc">
        Descripción:{" "}
        <span className="entry-fs__desc--body">{oneEntry.description}</span>
      </p>
      <div className="entry-fs__body"></div>

      <div className="entry-fs__body">
        <Interweave content={oneEntry.sanitizedHTML} />
      </div>
    </div>
  );
};
