import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import PropTypes from "prop-types";

const RandomNumberContent = props => {
  const {
    randomNumber,
    decrementCurrentLocation,
    incrementCurrentLocation
  } = props;
  return (
    <div>
      <Container>
        <Row>
          <Col sm="3" className="nav-buttons">
            <Button
              size="lg"
              color="primary"
              block={true}
              onClick={decrementCurrentLocation}
            >
              Previous
            </Button>
          </Col>
          <Col sm="6">
            <div className="main-content display-1 text-center">
              <span className="align-middle">{randomNumber}</span>
            </div>
          </Col>
          <Col sm="3" className="nav-buttons">
            <Button
              size="lg"
              color="primary"
              block={true}
              onClick={incrementCurrentLocation}
            >
              Next
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

RandomNumberContent.propTypes = {
  decrementCurrentLocation: PropTypes.func.isRequired,
  randomNumber: PropTypes.number.isRequired,
  incrementCurrentLocation: PropTypes.func.isRequired
};

export default RandomNumberContent;
