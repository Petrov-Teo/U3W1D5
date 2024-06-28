import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavbarT from "./component/NavbarT";
import SFilm from "./component/SFilm";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <NavbarT />
      <SFilm titolo="Batman" sectionTitle="TV Shows" />
      <SFilm titolo="The Avengers" sectionTitle="Watch it Again" />
      <SFilm titolo="Annabelle" sectionTitle="New Releases" />
    </div>
  );
}

export default App;
