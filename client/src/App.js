import { AppRoutes } from "./routes/AppRoutes";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";

function App() {
  const [user, setUser] = useState();
  const [projects, setProjects] = useState([]);
  const [resetUser, setResetUser] = useState(false);

  useEffect(() => {
    const sessionToken = findToken();

    if (sessionToken !== null) {
      let id = jwtDecode(sessionToken).user.id;

      axios
        .get(`http://localhost:4000/users/oneUser/${id}`)

        .then((res) => {
          setUser(res.data.resultUser[0]);
          setProjects(res.data.resultProject);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, [resetUser]);

  const findToken = () => {
    try {
      let sessionToken = localStorage.getItem("infocoolx");
      return sessionToken;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <AppRoutes
        user={user}
        setUser={setUser}
        projects={projects}
        setProjects={setProjects}
        resetUser={resetUser}
        setResetUser={setResetUser}
      />
    </div>
  );
}

export default App;
