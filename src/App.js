// import Komponen from "./Materi/Komponen";
// import Styling from "./Materi/styling";
// import Styled from "./Materi/styling/Styled";
// import Bootstrap from "./Materi/styling/Bootstrap";
// import Reusable from "./Materi/Reusable";
// import Rendering from "./Materi/Rendering";
// import Form from "./Materi/Form";
// import Lifecycle from "./Materi/Lifecycle";
// import Hooks from "./Materi/Hooks";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Belajar React Routing</h1>

      <nav>
        <Link to="/Home" className="mr">
          Home
        </Link>
        <Link to="/About" className="mr">
          About
        </Link>
        <Link to="/contact" className="mr">
          contact
        </Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default App;
