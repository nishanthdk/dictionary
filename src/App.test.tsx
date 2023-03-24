import React from "react";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import App from "./App";

test("render home component in the document", () => {
  const component = render(<App />);
  const inputElement = component.getByText("Search");
  expect(inputElement).toBeInTheDocument();
});
test("when render the app component the clear button should disabled", () => {
  const component = render(<App />);
  const inputElement = component.getByText("Clear");
  expect(inputElement).toBeDisabled();
});
test("typing in the input field updates the keyword state", () => {
  render(<App />);

  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "test" } });

  expect(input).toHaveValue("test");
});
describe("App", () => {
  test("clear button clears search results", async () => {
    render(<App />);

    // Enter "test" in the search input
    const searchInput = screen.getByRole("textbox");
    fireEvent.change(searchInput, { target: { value: "test" } });

    // Click the search button
    const searchButton = screen.getByRole("button", { name: /search/i });
    fireEvent.click(searchButton);

    // Wait for the Word component to appear
    const wordDetails = await waitFor(() => screen.getByText(/Word/i), {
      timeout: 5000,
    });

    // Click the clear button
    const clearButton = screen.getByRole("button", { name: /clear/i });
    fireEvent.click(clearButton);

    // Verify that the search input and Word component have been cleared
    expect(searchInput).toHaveValue("");
    expect(wordDetails).not.toBeInTheDocument();
  });
});
