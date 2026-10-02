import React from "react";
import { render, screen } from "@testing-library/react";

jest.mock("./components/Projects/Projects", () => () => <div />);
jest.mock("./components/Certificates/Certificates", () => () => <div />);
jest.mock("./components/Profile/Experience", () => () => <div />);
jest.mock("./components/Profile/Skills", () => () => <div />);

import App from "./App";

test("renders portfolio positioning", () => {
  render(<App />);
  const heading = screen.getByText(/Full-Stack Web Developer/i);
  expect(heading).toBeInTheDocument();
});
