import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

test("the react app renders the title", () => {
  render(<App />);
  const title = screen.getByText(/apteco task/i);
  expect(title).toBeInTheDocument();
});
