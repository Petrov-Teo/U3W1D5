import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import SFilm from "./component/SFilm";
import NavbarProva from "./component/NavBarProva";
import TvShows from "./component/TvShows";
// import NavbarMobile from "./component/NavBarMobie";

function App() {
  return (
    <div className="App" data-bs-theme="dark">
      <NavbarProva />
      {/* <NavbarMobile /> working progress*/}
      <TvShows />
      <SFilm titolo="Batman" sectionTitle="TV Shows" />
      <SFilm titolo="The Avengers" sectionTitle="Watch it Again" />
      <SFilm titolo="Annabelle" sectionTitle="New Releases" />
    </div>
  );
}

export default App;
