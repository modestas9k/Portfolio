import { storiesOf } from "@storybook/react";
import React from "react";
import Card from "./Card";
import theme from "../../theme";
import { ThemeProvider } from "styled-components";
import img1 from "../../assets/wineSite1.png";

storiesOf("Card", module).add("Card", () => (
  <ThemeProvider theme={theme}>
    <Card
      img={img1}
      alt="wine site screenshot"
      title="Wine Site"
      description="This was cool exercise"
    />
  </ThemeProvider>
));
