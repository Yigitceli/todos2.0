import Auth from "./components/Auth";
import "./App.css";

import { useEffect} from "react";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import { checkIsAuthenticated } from "./store/userReducer";

function App() {
  
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    dispatch(checkIsAuthenticated());
  }, [dispatch]);

  return (
    <div className="App">
      {isLoading ? (
        "Loading"
      ) : !isAuthenticated ? (
        <Auth />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
