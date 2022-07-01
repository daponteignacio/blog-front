import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createEntry, getOneEntry, updateEntry } from "../../actions/entry";
import { useForm } from "../../hooks/useForm";

export const FormEntry = ({ edit }) => {
  const dispatch = useDispatch();
  const { id = "" } = useParams();
  const { oneEntry } = useSelector((state) => state.entry);

  const handleSubmit = (e) => {
    e.preventDefault();

    const values = {
      title,
      description,
      markdown,
    };

    edit
      ? dispatch(updateEntry(values, oneEntry._id))
      : dispatch(createEntry(values));
  };

  const [formEntryValues, handleEntryInputChange] = useForm({
    title: edit ? oneEntry?.title : "",
    description: edit ? oneEntry?.description : "",
    markdown: edit ? oneEntry?.markdown : "",
  });

  const { title, description, markdown } = formEntryValues;

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group mb-4">
        <label className="form__label" htmlFor="title">
          Título
        </label>
        <input
          className="form-control form__input"
          id="title"
          type="text"
          name="title"
          value={title}
          onChange={handleEntryInputChange}
        ></input>
      </div>

      <div className="form-group mb-4">
        <label className="form__label" htmlFor="description">
          Descripción
        </label>
        <input
          className="form-control form__input"
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={handleEntryInputChange}
        ></input>
      </div>

      <div className="form-group mb-4">
        <label className="form__label" htmlFor="markdown">
          Cuerpo (markdown habilitado)
        </label>
        <textarea
          className="form-control form__input"
          id="markdown"
          name="markdown"
          value={markdown}
          onChange={handleEntryInputChange}
        ></textarea>
      </div>

      {edit ? (
        <button type="submit" className="btn btn-success">
          Editar
        </button>
      ) : (
        <button type="submit" className="btn btn-success">
          Publicar
        </button>
      )}
    </form>
  );
};
