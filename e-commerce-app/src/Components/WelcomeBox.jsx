import React, { useState } from "react";

// function that welcomes new user and asks for their name
function WelcomeBox({ setUsername }) {
  const [inputValue, setInputValue] = useState("");
  // take the value from the input field and set it as the username
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  // prevent the default form submission and set the username
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUsername(inputValue.trim());
    setInputValue("");
  };
  // return the welcome box with a form to enter the username
  return (
    <div className="welcome-box">
      <h2>Welcome to the Ear Candy App!</h2>
      {/* form to enter the username */}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Please enter your name here: </label>
        <input
          type="text"
          id="username"
          value={inputValue}
          onChange={handleInputChange}
          required
        />
        <button id="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default WelcomeBox;
