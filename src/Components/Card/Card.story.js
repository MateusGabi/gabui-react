import { Card } from "./../../index";
import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Card", module).add("Default", () => (
  <div style={{ maxWidth: "300px" }}>
    <Card />
  </div>
));
