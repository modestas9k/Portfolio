import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "./Button";
import "./../../fontAwesome";

storiesOf("Button", module)
  .add("default", () => <Button text="text" />)
  .add("primary", () => <Button text="text" type="primary" />)
  .add("transparent", () => <Button text="text" type="transparent" />)
  .add("gitHub", () => <Button text="GitHub" type="gitHub" />);
