import React, { Component } from "react";
import { Row, Col, Figure } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const NextEvolution = (props) => {
  return (
    <>
      {props.next.length > 0 && (
        <Row>
          <Col>
            <h3> Next Evolution</h3>
            {props.next.map((ne) => {
              return (
                <>
                  <FontAwesomeIcon
                    icon={props.isPrevious ? faArrowLeft : faArrowRight}
                  />
                  <Figure>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src={ne.img}
                    />
                    <Figure.Caption className="text-center">
                      <strong>{ne.name}</strong>
                    </Figure.Caption>
                  </Figure>
                </>
              );
            })}
          </Col>
        </Row>
      )}
      {props.prev.length > 0 && (
        <Row>
          <Col>
            <h3> Previous Evolution</h3>
            {props.prev.map((ne) => {
              return (
                <>
                  <FontAwesomeIcon
                    icon={props.isPrevious ? faArrowLeft : faArrowRight}
                  />
                  <Figure>
                    <Figure.Image
                      width={171}
                      height={180}
                      alt="171x180"
                      src={ne.img}
                    />
                    <Figure.Caption className="text-center">
                      <strong>{ne.name}</strong>
                    </Figure.Caption>
                  </Figure>
                </>
              );
            })}
          </Col>
        </Row>
      )}
    </>
  );
};

export default NextEvolution;
