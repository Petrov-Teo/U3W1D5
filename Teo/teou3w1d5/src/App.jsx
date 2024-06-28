import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavbarT from "./component/NavbarT";
import SFilm from "./component/SFilm";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <NavbarT />
      <SFilm titolo="Batman" />
      <SFilm titolo="The Avengers" />
      <SFilm titolo="Annabelle" />
    </div>
  );
}

export default App;
