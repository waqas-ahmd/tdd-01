import { render, screen } from "@testing-library/react";
import App from "./App";

test("find develop in doc", () => {
  render(<App />);
  const linkElement = screen.getByText(/developers/i);
  expect(linkElement).toBeInTheDocument();
});

test("find input with placeholder", () => {
  render(<App />);
  const worldElement = screen.getByPlaceholderText(/name/i);
  expect(worldElement).toBeInTheDocument();
});
