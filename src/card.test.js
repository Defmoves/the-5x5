import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/styles";

import Card from "./card";
import theme from "./theme";

const article = {
  title: "title",
  description: "description",
  urlToImage: "urlToImage",
  url: "url"
};

describe("/src/<Card />", () => {
  test("Renders the passed in text", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card article={article} />
      </ThemeProvider>
    );

    expect(getByText("title")).toBeDefined();
    expect(getByText("description")).toBeDefined();
  });
});
