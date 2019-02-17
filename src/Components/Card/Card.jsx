import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardLink,
  CardSubtitle,
  CardText,
  CardTitle,
  Media
} from "reactstrap";

import PropTypes from "prop-types";
import React from "react";

export const MyCardImage = ({ image }) => {
  if (!image) {
    return null;
  }

  return <CardImg top width="100%" src={image} alt="Card image cap" />;
};

export const MyCardDefault = ({ image, title, subtitle, content }) => (
  <Card>
    {image ? (
      <CardImg top width="100%" src={image} alt="Card image cap" />
    ) : null}
    <CardBody>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      {content instanceof Function ? content() : <CardText>{content}</CardText>}
    </CardBody>
  </Card>
);

export const MyCardSocial = ({
  avatar: { url, alt },
  title,
  subtitle,
  content
}) => {
  return (
    <Card>
      <CardBody>
        <Media>
          <Media left href="#">
            <img src={url} alt={alt} />
          </Media>
          <Media body>
            <Media heading>{title}</Media>
            <p>
              <small>{subtitle}</small>
            </p>
            <div>{content()}</div>
          </Media>
        </Media>
      </CardBody>
    </Card>
  );
};

const MyCard = props => {
  switch (props.type) {
    case "default":
      return <MyCardDefault {...props} />;
    case "social":
      return <MyCardSocial {...props} />;
    default:
      break;
  }
  return null;
};

MyCard.propTypes = {
  type: PropTypes.oneOf(["default", "social"]),
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.func.isRequired
};

MyCard.defaultProps = {
  type: "default"
};

export { MyCard };
export default MyCard;
