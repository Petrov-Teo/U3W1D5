import React from "react";
import { Card, Container, Row } from "react-bootstrap";

class SFilm extends React.Component {
  state = {
    filmSection: [],
  };

  getMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=be73bcde&s=" + this.props.titolo)
      .then((response) => response.json())
      .then((objMovies) => this.setState({ filmSection: objMovies.Search.slice(0, 6) }))

      .catch((error) => console.log("Si è verificato un errore!"));
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    return (
      <Container>
        <Row>
          <h4 className="text-start mt-5 text-light">{this.props.sectionTitle}</h4>
          <Container className="d-flex gap-2 ">
            {this.state.filmSection.map((movie) => {
              return (
                <Card key={movie.imdbID} xs={2} md={4}>
                  <Card.Img src={movie.Poster} alt={movie.Title} />
                </Card>
              );
            })}
          </Container>
        </Row>
      </Container>
    );
  }
}

export default SFilm;
