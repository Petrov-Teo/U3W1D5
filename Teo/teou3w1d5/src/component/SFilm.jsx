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
      <Container>
        <Row>
          <h4 className="text-start mt-5 text-light">{this.props.sectionTitle}</h4>
          <Container className="d-flex">
            {this.state.filmSection.map((movie) => {
              return (
                <Card className="m-2">
                  <Row key={movie.imdbID} sm={2} lg={4} xl={6}>
                    <Col className="d-flex ">
                      <img src={movie.Poster} alt={movie.Title} />
                    </Col>
                  </Row>
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
