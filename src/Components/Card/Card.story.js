import { Card } from "./../../index";
import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Card", module).add("with text", () => (
  <div style={{ maxWidth: "300px" }}>
    <Card />
  </div>
));
