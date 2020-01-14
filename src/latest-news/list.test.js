import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/styles";

import List from "./list";
import theme from "../theme";
import { errorMessage, welcomeMessage } from "./index";

const articles = [
  {
    title: "title1",
    description: "description1",
    urlToImage: "urlToImage1",
    url: "url1"
  },
  {
    title: "title2",
    description: "description2",
    urlToImage: "urlToImage2",
    url: "url2"
  },
  {
    title: "title3",
    description: "description3",
    urlToImage: "urlToImage3",
    url: "url3"
  },
  {
    title: "title4",
    description: "description4",
    urlToImage: "urlToImage4",
    url: "url1"
  },
  {
    title: "title5",
    description: "description5",
    urlToImage: "urlToImage5",
    url: "url5"
  }
];

describe("/src/latest-news/<List />", () => {
  test("Renders welcome message when passed it is passed", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <List articles={[welcomeMessage]} />
      </ThemeProvider>
    );

    expect(getByText(welcomeMessage)).toBeDefined();
  });

  test("Renders error message when it is passed", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <List articles={[errorMessage]} />
      </ThemeProvider>
    );

    expect(getByText(errorMessage)).toBeDefined();
  });

  test("Renders loader message when it is passed empty array", () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <List articles={[]} />
      </ThemeProvider>
    );

    expect(getByRole("progressbar")).toBeDefined();
  });

  test("Renders cards when articles array is passed in", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <List articles={articles} />
      </ThemeProvider>
    );

    expect(getByText("title1")).toBeDefined();
    expect(getByText("title2")).toBeDefined();
    expect(getByText("title3")).toBeDefined();
    expect(getByText("title4")).toBeDefined();
    expect(getByText("title5")).toBeDefined();
  });
});
