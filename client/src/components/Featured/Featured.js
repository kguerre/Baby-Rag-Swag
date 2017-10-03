import React from "react";
import { Row, Col, Card, CardTitle } from "react-materialize";

// import { Link } from "react-router-dom";

// export const Featured = () => (

// );
const Featured = () => (
  <Row>
    <Col s={4} className="grid-example">
      <Card
        header={<CardTitle reveal image={"img/office.jpg"} waves="light" />}
        title="Image goes here"
        reveal={
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        }
      />
    </Col>

    <Col s={4} className="grid-example">
      <Card
        header={<CardTitle reveal image={"img/office.jpg"} waves="light" />}
        title="Image goes here"
        reveal={
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        }
      />
    </Col>

    <Col s={4} className="grid-example">
      <Card
        header={<CardTitle reveal image={"img/office.jpg"} waves="light" />}
        title="Image goes here"
        reveal={
          <p>
            Here is some more information about this product that is only
            revealed once clicked on.
          </p>
        }
      />
    </Col>
  </Row>
);
export default Featured;
