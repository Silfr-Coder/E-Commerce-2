//import necessary modules
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import AudioBook from "./AudioBook";

// this test file tests the App component to check it gets the correct audiobook data
test("creates audiobook instance with correct properties", () => {
  const book = new AudioBook(
    "Atomic Habits",
    "James Clear",
    10.99,
    "5hrs and 35mins",
    "English",
    "An Easy and Proven Way to Build Good Habits and Break Bad Ones",
    "BookImage"
  );
  // Check if the created audiobook instance has correct properties
  expect(book.title).toBe("Atomic Habits");
  expect(book.author).toBe("James Clear");
  expect(book.price).toBe(10.99);
  expect(book.bookLength).toBe("5hrs and 35mins");
  expect(book.language).toBe("English");
  expect(book.summary).toBe(
    "An Easy and Proven Way to Build Good Habits and Break Bad Ones"
  );
});
