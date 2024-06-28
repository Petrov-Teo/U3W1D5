import React from "react";
import { Card, CardBody, Col, Container, Row } from "react-bootstrap";

class SFilm extends React.Component {
  state = {
    filmSection: [],
  };

  getMovies = () => {
    fetch("http://www.omdbapi.com/?apikey=be73bcde&s=" + this.props.titolo)
      .then((response) => response.json())
      .then((objMovies) => this.setState({ filmSection: objMovies.Search }))

      .catch((error) => console.log("Si è verificato un errore!"));
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    return (
      <Container className="d-flex">
        <Row className="d-flex">
          <h4 className="text-start mt-5 text-light">Trending Now</h4>
          <Container className="d-flex movecard">
            {this.state.filmSection.map((movie) => {
              return (
                <Row key={movie.imdbID} sm={2} lg={4} xl={6} className="row mb-2">
                  <Col className="d-flex ">
                    <img src={movie.Poster} alt={movie.Title} />
                  </Col>
                </Row>
              );
            })}
          </Container>
        </Row>
      </Container>
    );
  }
}

export default SFilm;
