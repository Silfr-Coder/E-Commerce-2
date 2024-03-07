import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders welcome message", () => {
  const { getByText } = render(<App />);
  const welcomeMessage = getByText(/Welcome/i);
  expect(welcomeMessage).toBeInTheDocument();
});

test("adds audiobook to basket", () => {
  const { getByText } = render(<App />);
  const addAudiobookButton = getByText(/Add to basket/i);
  fireEvent.click(addAudiobookButton);
  const basket = getByText(/Basket/i);
  expect(basket).toBeInTheDocument();
});

test("removes audiobook from basket", () => {
  const { getByText } = render(<App />);
  const addAudiobookButton = getByText(/Add to basket/i);
  fireEvent.click(addAudiobookButton);
  const removeAudiobookButton = getByText(/Remove from basket/i);
  fireEvent.click(removeAudiobookButton);
  const basket = getByText(/Basket/i);
  expect(basket).not.toBeInTheDocument();
});
