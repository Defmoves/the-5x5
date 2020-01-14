import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@material-ui/styles";

import Select from "./select";
import theme from "../theme";

const mockHandleClick = jest.fn(() => {});

describe("/src/latest-news/<Select />", () => {
  test("Renders full country list", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Select handleClick={mockHandleClick} selected={"gb"} />
      </ThemeProvider>
    );

    const gb = getByText(`United Kingdom`);
    const us = getByText(`United States`);
    const fr = getByText(`France`);
    const au = getByText(`Australia`);
    const ind = getByText(`India`);

    expect(gb).toBeDefined();
    expect(us).toBeDefined();
    expect(fr).toBeDefined();
    expect(au).toBeDefined();
    expect(ind).toBeDefined();
  });

  test("Correct switch is checked by selected props", () => {
    const { getByDisplayValue } = render(
      <ThemeProvider theme={theme}>
        <Select handleClick={mockHandleClick} selected={"gb"} />
      </ThemeProvider>
    );

    const gb = getByDisplayValue("gb");
    const us = getByDisplayValue("us");
    const fr = getByDisplayValue("fr");
    const au = getByDisplayValue("au");
    const ind = getByDisplayValue("in");

    expect(gb.checked).toBe(true);
    expect(us.checked).toBe(false);
    expect(fr.checked).toBe(false);
    expect(au.checked).toBe(false);
    expect(ind.checked).toBe(false);
  });

  test("Correct switch is toggled on click", () => {
    const { getByDisplayValue, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Select handleClick={mockHandleClick} selected={"gb"} />
      </ThemeProvider>
    );

    getByTestId(`switch-us`).click();

    setTimeout(() => {
      const gb = getByDisplayValue("gb");
      const us = getByDisplayValue("us");
      const fr = getByDisplayValue("fr");
      const au = getByDisplayValue("au");
      const ind = getByDisplayValue("in");

      expect(gb.checked).toBe(false);
      expect(us.checked).toBe(true);
      expect(fr.checked).toBe(false);
      expect(au.checked).toBe(false);
      expect(ind.checked).toBe(false);
    }, 1);
  });
});
