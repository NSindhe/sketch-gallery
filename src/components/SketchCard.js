import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import cardImage from "../images/krishna.jpg";
import DetailsPopover from "./DetailsPopover";

const SketchCard = () => {
  const carditems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // temporarly added the iterations for card
  return (
    <Container d="flex">
      <div className="verticle-space">
        <Row xs={1} sm={2} md={3} lg={3}>
          {carditems.map((item) => (
            <Col className="bottom-space">
              <Card
                style={{ width: "22rem", height: "24em" }}
                className="imgHolder"
              >
                <DetailsPopover>
                  <Card.Img
                    className="sketchImg" // style applied for image to fit in the area
                    variant="top"
                    src={cardImage}
                  />
                </DetailsPopover>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default SketchCard;
