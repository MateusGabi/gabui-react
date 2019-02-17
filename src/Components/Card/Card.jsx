import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle
} from "reactstrap";

import React from "react";

export const MyCardImage = ({ image }) => {
  if (!image) {
    return null;
  }

  return (
    <CardImg
      top
      width="100%"
      src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
      alt="Card image cap"
    />
  );
};

export const MyCard = ({ image, title, subtitle, content }) => (
  <Card>
    <MyCardImage image={image} />
    <CardBody>
      <CardTitle>Card title</CardTitle>
      <CardSubtitle>Card subtitle</CardSubtitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </CardText>
    </CardBody>
  </Card>
);

export default MyCard;
