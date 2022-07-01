import { useDispatch, useSelector } from "react-redux";
import { getAllEntries } from "../../actions/entry";
import { Entry } from "./Entry";
import { Header } from "./Header";

export const Dashboard = () => {

    const dispatch = useDispatch();
    const { entries } = useSelector((state) => state.entry);
    const { isAuth, name } = useSelector((state) => state.auth);
  
    if (isAuth) {
      dispatch(getAllEntries());
    }
  

  return (
    <div className="container">
      <Header name={name} />
      <div className="entry-grid">
        {entries.map((e) => (
          <Entry key={e._id} elements={e} />
        ))}
      </div>
    </div>
  );
};
