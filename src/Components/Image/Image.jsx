import PropTypes from "prop-types";
import React from "react";

const Image = ({ src, size, rounded, circled }) => {
  let classes = "img-thumbnail";
  if (rounded) classes += " rounded";
  if (circled) classes += " rounded-circle";

  let sizepx = 100;
  if (size === "lg") sizepx = sizepx * 1.25;
  if (size === "sm") sizepx = sizepx * 0.75;

  return (
    <div style={{ marginRight: "1rem" }}>
      <img width={sizepx} src={src} className={classes} />
    </div>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["lg", "md", "sm"]),
  rounded: PropTypes.bool,
  circled: PropTypes.bool
};

export default Image;
