import { ButtonGroup, Col, Container, Dropdown } from "react-bootstrap";
import { GiAbstract050 } from "react-icons/gi";
import { BsBorderAll } from "react-icons/bs";

const TvShows = () => {
  return (
    <Container className="d-flex justify-content-between">
      <Col>
        <h2 className="text-light">TV Shows</h2>
        <ButtonGroup className="ms-4 mt-2">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" size="sm" className="rounded-0" style={{ backgroundColor: "#221f1f" }}>
              Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Comedy</Dropdown.Item>
              <Dropdown.Item href="#">Drama</Dropdown.Item>
              <Dropdown.Item href="#">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </ButtonGroup>
      </Col>
      <Col className="justify-content-end">
        <i className="bi bi-grid icons colorIcon">
          <GiAbstract050 />
        </i>
        <i className="bi bi-grid-3x3 icons colorIcon">
          <BsBorderAll />
        </i>
      </Col>
    </Container>
  );
};

export default TvShows;
