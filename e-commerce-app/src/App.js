import "./App.css";
import { audioBookList } from "./AudioBook";
import Header from "./Components/Header";
import WelcomeBox from "./Components/WelcomeBox";
import React, { useState, useEffect } from "react";
import AudiobookPage from "./Components/AudiobookPage";
import BookImage from "./Components/open-book-2.jpeg";

function App() {
  // using the useState hook to manage the state of the basket,
  // the total cost and username
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  const [username, setUsername] = useState("");

  // using the useEffect hook to update the username using local storage
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  // using the useEffect hook to store the username in the local storage
  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  // setup scroll to top button
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // function to add audiobook to basket and update the total cost
  const addAudiobookToBasket = (audioBook) => {
    //add the audiobook to the basket
    setBasket([...basket, audioBook]);
    //update the total cost and make audioBook.price a number
    //update the total cost and round to 2 decimal places
    setTotal(total + audioBook.price);
  };

  // update the selected audiobook
  const [selectedAudiobook, setSelectedAudiobook] = useState(null);

  // function to handle the click event is an audiobook is clicked
  const handleAudiobookClick = (audioBook) => {
    setSelectedAudiobook(audioBook);
  };
  //temporary function to print the selected audiobook to the console
  const printToScreen = () => {
    console.log("Something was clicked");
  };

  const handleLogout = () => {
    console.log("Logout button clicked. Current username:", username);
    setUsername("");
    console.log("Username after logout:", username);
  };

  return (
    <>
      <div className="App-container">
        {/* display the header */}
        <Header
          headerItems={[
            { className: "header-logo-box", text: "Ear Candy" },
            {
              className: "header-username-box",
              text: username ? `Welcome, ${username}` : "",
            },
            {
              className: "Logout-button",
              text: "Logout",
              onClick: handleLogout, // set username to empty string,
            },
            { className: "header-welcome-box", text: "" },
            {
              className: "header-spend-summary-box",
              text: "Total: £" + total.toFixed(2),
            },
          ]}
        />
        {/* display the main content of audiobooks here */}
        <div className="main-page-content">
          {username ? ( // If username is set, display main page
            <>
              {/* if no audiobook is selected, display the whole list of audiobooks */}
              {!selectedAudiobook && (
                <div className="books-container">
                  {/* map through the audiobook list and display each audiobook */}
                  {audioBookList.map((audioBook, index) => (
                    <div className="audiobook-wrapper" key={index}>
                      <div
                        className="audiobook-container"
                        // pass the audiobook object to the handleAudiobookClick function
                        onClick={() => handleAudiobookClick(audioBook)}
                      >
                        {/* display audiobook details and image */}
                        <h3>{audioBook.title}</h3>
                        <p>{audioBook.author}</p>
                        <p>£{audioBook.price}</p>
                        <img src={BookImage} alt="book" />
                      </div>
                      {/* button to pass audiobook object directly to basket */}
                      <button
                        className="add-audiobook-button"
                        onClick={() => addAudiobookToBasket(audioBook)}
                      >
                        <h3>Add to basket</h3>
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {/* If audiobook is selected, display audiobook page */}
              {selectedAudiobook && (
                <div className="books-container">
                  <AudiobookPage
                    addAudiobookToBasket={addAudiobookToBasket}
                    audioBook={selectedAudiobook}
                    onClose={() => setSelectedAudiobook(null)}
                  />
                </div>
              )}
            </>
          ) : (
            // If username is not set, display WelcomeBox
            <WelcomeBox setUsername={setUsername} />
          )}
          {/* Display the basket */}
          <div className="basket-container">
            <h3>Basket</h3>
            <ul>
              {basket.map((audioBook, index) => (
                <li key={index}>
                  <p>
                    {audioBook.title}: £{audioBook.price}
                  </p>
                  {/* button to remove audiobook from basket */}
                  <button
                    className="remove-Audiobook-button"
                    onClick={() => {
                      const newBasket = [...basket];
                      newBasket.splice(index, 1);
                      setBasket(newBasket);
                      setTotal(total - audioBook.price);
                    }}
                  >
                    <h5>Remove from basket</h5>
                  </button>
                </li>
              ))}
            </ul>
            <h3>Total: £{parseFloat(total).toFixed(2)}</h3>
          </div>
        </div>
      </div>
      {/* Scroll to top of page button */}
      <button className="top-of-page-btn" onClick={scrollToTop}>
        Back to top
      </button>
    </>
  );
}

export default App;
