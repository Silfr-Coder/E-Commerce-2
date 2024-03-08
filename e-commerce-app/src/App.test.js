//import necessary modules
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Add to basket button", () => {
  render(<App />);
  const addToBasketButton = screen.queryAllByText(/Add to basket/i);
  expect(addToBasketButton.length).toBeGreaterThan(0);

  //perform assertions or actions on each button
  addToBasketButton.forEach((button) => {
    //Example: expect button to be visible
    expect(button).toBeVisible();
  });
});

test("removes audiobook from the basket", () => {
  render(<App />);
  const removeButton = screen.queryAllByText(/Remove/i);
  expect(removeButton.length).toBeGreaterThan(0);

  //perform assertions or actions on each button
  removeButton.forEach((button) => {
    //Example: expect button to be visible
    expect(button).toBeVisible();
  });
});
